document.getElementById("reservationForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const data = {
        id: Date.now(),
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        time: document.getElementById("time").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        date: document.getElementById("date").value,
        people: document.getElementById("people").value,
        confirmed: false
      };
      const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
      reservations.push(data);
      localStorage.setItem("reservations", JSON.stringify(reservations));
      alert("Đặt bàn thành công!");
      this.reset();
      window.dispatchEvent(new Event("reservationUpdated"));
    });