document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("status").innerText = "✅ Photo ready to be sent (but no backend yet!)";
  });
  