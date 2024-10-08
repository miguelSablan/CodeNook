import Image from "next/image";
import Link from "next/link";

interface Applicant {
  id: number;
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
  return (
    <dialog id="view_applicants_modal" className="modal">
      <div className="modal-box bg-[#242323] relative">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl text-white">Applicants</h3>
        <div className="space-y-4 mt-4">
          {/* Applicants List */}
          {applicants.length > 0 ? (
            <ul className="space-y-2">
              {applicants.map((applicant) => (
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
                        <div className="rounded-full bg-blue-500 h-full w-full text-white text-lg leading-[128px] flex items-center justify-center">
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
                  <button className="btn btn-neutral ml-4">Accept</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No applicants yet.</p>
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
