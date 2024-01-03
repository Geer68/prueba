export function NoMatchesSearch() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-red-50 border-l-8 border-red-900">
        <div className="flex items-center">
          <div className="p-2">
            <div className="grid grid-cols-2 items-center">
              <div className="ml-2 flex items-left">
                <svg
                  className="h-8 w-8 text-red-900 mr-2 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="noñne"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <aside>
                <p className="px-6 py-4 text-red-900 font-semibold text-lg">
                  No existen coincidencias
                </p>
                <div className="px-16 mb-4">
                  <li className="text-md font-bold text-red-500 text-sm">
                    Name field is required.
                  </li>
                  <li className="text-md font-bold text-red-500 text-sm">
                    Email field is required.
                  </li>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
