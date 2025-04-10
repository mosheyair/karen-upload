document.getElementById("uploadForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const status = document.getElementById("status");
  const fileInput = document.getElementById("photoInput");
  const file = fileInput.files[0];

  if (!file) {
    status.innerText = "❌ Please choose a photo first!";
    return;
  }

  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch("https://www.mokafullstack.com:3000/upload", {

      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      status.innerText = "✅ Upload successful!";
      console.log("Uploaded file path:", data.filePath);
    } else {
      status.innerText = "❌ Upload failed. Server error.";
    }
  } catch (err) {
    console.error("Error uploading:", err);
    status.innerText = "❌ Could not reach server.";
  }
});

  