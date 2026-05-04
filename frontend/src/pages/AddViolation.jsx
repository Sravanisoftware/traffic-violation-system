import { useState } from "react";
import API from "../services/api";

function AddViolation({ onViolationAdded }) {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [violationType, setViolationType] = useState("");
  const [fineAmount, setFineAmount] = useState("");
  const [image, setImage] = useState(null); // ✅ NEW
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (fineAmount <= 0) {
      alert("Fine must be greater than 0");
      return;
    }

    const vehicleRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    if (!vehicleRegex.test(vehicleNumber)) {
      alert("Invalid vehicle number (e.g., AP09AB1234)");
      return;
    }

    setLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      // ✅ Use FormData for image upload
      const formData = new FormData();
      formData.append("vehicleNumber", vehicleNumber);
      formData.append("violationType", violationType);
      formData.append("fineAmount", Number(fineAmount));
      formData.append("issuedTo", user.id);
      formData.append("image", image); // ✅ NEW

      await API.post("/violations", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Violation created!");

      // ✅ Reset form
      setVehicleNumber("");
      setViolationType("");
      setFineAmount("");
      setImage(null);

      onViolationAdded();

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to create violation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Add Violation</h4>

      <form onSubmit={handleSubmit}>
        {/* Vehicle Number */}
        <input
          type="text"
          placeholder="Vehicle Number (AP09AB1234)"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
          required
        />
        <br /><br />

        {/* Violation Type */}
        <select
          value={violationType}
          onChange={(e) => setViolationType(e.target.value)}
          required
        >
          <option value="">Select Violation</option>
          <option value="No Helmet">No Helmet</option>
          <option value="Signal Jump">Signal Jump</option>
          <option value="Overspeeding">Overspeeding</option>
        </select>
        <br /><br />

        {/* Fine Amount */}
        <input
          type="number"
          placeholder="Fine Amount"
          value={fineAmount}
          onChange={(e) => setFineAmount(e.target.value)}
          required
        />
        <br /><br />

        {/* ✅ Image Upload */}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br /><br />

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Violation"}
        </button>
      </form>
    </div>
  );
}

export default AddViolation;