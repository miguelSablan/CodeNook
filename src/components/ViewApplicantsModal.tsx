import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Applicant {
  id: number;
  status: string;
  user: {
    id: string;
    name: string;
    image: string;
  };
}

interface ViewApplicantsModalProps {
  applicants: Applicant[];
}

function ViewApplicantsModal({ applicants }: ViewApplicantsModalProps) {
  const [loading, setLoading] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAccept = async (applicationId: number) => {
    const confirmAccept = window.confirm(
      "Are you sure you want to accept this applicant?"
    );
    if (!confirmAccept) return;

    setLoading(applicationId);
    try {
      const response = await fetch("/api/accept", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationId: applicationId,
          status: "accepted",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update application status");
      }
    } catch (error) {
      console.error("Error accepting applicant:", error);
      setError("Failed to update application status. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  // Separate applicants by status
  const acceptedApplicants = applicants.filter(
    (applicant) => applicant.status === "accepted"
  );
  const pendingApplicants = applicants.filter(
    (applicant) => applicant.status !== "accepted"
  );

  return (
    <dialog id="view_applicants_modal" className="modal">
      <div className="modal-box bg-[#242323] relative">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl">Applicants</h3>
        <p className="text-sm text-gray-400">
          Review the applications submitted for your project.
        </p>
        {error && <p className="text-red-500">{error}</p>}

        <div className="space-y-4 mt-4 max-h-[400px] overflow-y-auto project-scrollbar">
          {/* Accepted Applicants */}
          {acceptedApplicants.length > 0 && (
            <>
              <h4 className="text-md">Accepted Applicants</h4>
              <ul className="space-y-2">
                {acceptedApplicants.map((applicant) => (
                  <li
                    key={applicant.id}
                    className="flex items-center p-3 bg-gray-800 rounded-lg"
                  >
                    <Link
                      href={`/dashboard/users/${applicant.user.id}`}
                      className="flex items-center flex-1"
                    >
                      <div className="w-12 h-12 rounded-full mr-4">
                        {applicant.user.image ? (
                          <Image
                            src={applicant.user.image}
                            className="rounded-full"
                            alt={`${applicant.user.name}'s avatar`}
                            height="128"
                            width="128"
                            priority
                            layout="intrinsic"
                          />
                        ) : (
                          <div className="rounded-full bg-primary h-full w-full text-white text-lg leading-[128px] flex items-center justify-center">
                            <span className="text-white">
                              {applicant.user.name?.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white text-lg font-semibold">
                          {applicant.user.name}
                        </p>
                      </div>
                    </Link>
                    <span className="ml-4 text-success">Accepted</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Pending Applicants */}
          <h4 className="text-md">Pending Applicants</h4>
          {pendingApplicants.length > 0 ? (
            <ul className="space-y-2">
              {pendingApplicants.map((applicant) => (
                <li
                  key={applicant.id}
                  className="flex items-center p-3 bg-gray-800 rounded-lg"
                >
                  <Link
                    href={`/dashboard/users/${applicant.user.id}`}
                    className="flex items-center flex-1"
                  >
                    <div className="w-12 h-12 rounded-full mr-4">
                      {applicant.user.image ? (
                        <Image
                          src={applicant.user.image}
                          className="rounded-full"
                          alt={`${applicant.user.name}'s avatar`}
                          height="128"
                          width="128"
                          priority
                          layout="intrinsic"
                        />
                      ) : (
                        <div className="rounded-full bg-primary h-full w-full text-white text-lg leading-[128px] flex items-center justify-center">
                          <span className="text-white">
                            {applicant.user.name?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white text-lg font-semibold">
                        {applicant.user.name}
                      </p>
                    </div>
                  </Link>
                  <button
                    className="btn btn-neutral ml-4"
                    onClick={() => handleAccept(applicant.id)}
                    disabled={loading === applicant.id}
                  >
                    {loading === applicant.id ? "Accepting..." : "Accept"}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-center text-gray-400 italic mt-2">
              No pending applicants yet.
            </p>
          )}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ViewApplicantsModal;
