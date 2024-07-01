import { useState } from "react";

interface EditProfileModalProps {
  userFullName: string;
  userName: string;
  userEmail: string;
  userImage: string;
  userBio: string;
}

export default function EditProfileModal({
  userFullName,
  userName,
  userEmail,
  userImage,
  userBio,
}: EditProfileModalProps) {
  const [name, setName] = useState(userFullName);
  const [username, setUsername] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [image, setImage] = useState(userImage);
  const [bio, setBio] = useState(userBio);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !username || !email) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    // Prepare data for API request
    const formData = {
      name,
      username,
      email,
      bio,
      // profile picture
    };

    try {
      const response = await fetch("/api/profile/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedProfile = await response.json();
        console.log("Profile updated successfully:", updatedProfile);
        setSuccess("Profile updated successfully!");
      } else {
        const errorData = await response.json();
        console.error("Failed to update profile:", errorData);
        setError(errorData.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("An error occurred while updating the profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box bg-[#242323] relative">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl text-white">Edit Profile</h3>
        <div className="space-y-4">
          {/* Error and Success Messages */}
          {error && <p className="text-error">{error}</p>}
          {success && <p className="text-success">{success}</p>}

          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          {/* Username Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          {/* Bio Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Bio</span>
            </label>
            <textarea
              placeholder="Enter a brief bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Modal Actions */}
          <div className="modal-action">
            <button
              type="button"
              className={`btn btn-primary`}
              onClick={handleSubmit}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
