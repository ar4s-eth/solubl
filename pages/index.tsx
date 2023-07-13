import { CameraIcon, TicketIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const features = [
  {
    name: "Rainbow Wallet",
    route: "/rainbow",
    description: "Using Rainbow Wallet",
    icon: <span>🌈</span>,
  },
  {
    name: "Magic Link",
    route: "/magiclink",
    description: "Using Magic Link custodial wallet",
    icon: (
      <svg
        className="h-6"
        width="26"
        height="31"
        viewBox="0 0 26 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8533 0C14.1947 1.64317 15.6741 3.16914 17.274 4.56019C16.2081 8.01821 15.6342 11.6921 15.6342 15.5C15.6342 19.308 16.2081 22.9818 17.274 26.4399C15.6742 27.8309 14.1947 29.3568 12.8533 31C11.5121 29.357 10.0328 27.8312 8.43313 26.4403C9.49916 22.9821 10.0731 19.3081 10.0731 15.5C10.0731 11.6919 9.49916 8.01785 8.43312 4.55968C10.0328 3.16877 11.5121 1.64297 12.8533 0Z"
          fill="#ffffff"
        />
        <path
          d="M5.37476 24.049C3.68158 22.8621 1.88466 21.8131 0.000297072 20.9184C0.523041 19.2046 0.804248 17.3854 0.804248 15.5005C0.804248 13.6153 0.522934 11.7958 0 10.0817C1.88446 9.18693 3.68148 8.13791 5.37474 6.95092C6.02224 9.69542 6.36486 12.5577 6.36486 15.5C6.36486 18.4423 6.02225 21.3046 5.37476 24.049Z"
          fill="#ffffff"
        />
        <path
          d="M19.3416 15.5C19.3416 18.4423 19.6842 21.3046 20.3317 24.0492C22.0252 22.862 23.8224 21.8129 25.7071 20.9181C25.1845 19.2043 24.9033 17.3853 24.9033 15.5005C24.9033 13.6155 25.1846 11.7961 25.7074 10.0821C23.8226 9.18729 22.0253 8.1381 20.3317 6.95089C19.6842 9.6954 19.3416 12.5577 19.3416 15.5Z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    name: "Crossmint",
    route: "/crossmint",
    description: "Using Crossmint custodial wallet",
    icon: (
      <svg
        className="h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 995.87"
      >
        <path
          fill="#ffffff"
          d="M970.31,889.5s9.6-.12,16,4.63c0,0,19.09-38.79-49.46-107.81,0,0,9.49-4.27,21.94-.12,0,0-1.93-59.1-73.09-113.18,0,0,10.47-3.84,15.69-1.86,0,0-27.63-52.78-99.5-81a52.06,52.06,0,0,1,24.19-5.86s-53.61-63.72-146.75-58.19c0,0,4.9-5.69,14.87-9.25,0,0-15-10.19-50.85-14.64-19.07-4.25-43.24-5.36-43.24-5.36,7.79-.22,24.11-4.81,33.63-7.68,39.34-4.22,77.39-14.39,95.74-36.48,0,0-7.91,2.53-19.21-8.3,0,0,81.51-7.83,141-85.95,0,0-20.56,8.19-32.83-.41,0,0,73.83-29.59,91.38-83.68,0,0-14,9-30.3,7.06,0,0,45.12-31.13,62-84.74,0,0-13.88,7.39-24.79,3,0,0,52-37,45-92.39,0,0-8.19,12.57-25.26,8.18,0,0,54.35-59.34,31.42-115.16,0,0-40.32-5.22-76.85,29.41,0,0-.12-9.6,4.63-16,0,0-38.78-19.09-107.81,49.46,0,0-4.27-9.49-.12-21.94,0,0-59.1,1.93-113.18,73.09,0,0-3.84-10.47-1.86-15.69,0,0-52.78,27.63-81,99.5a52,52,0,0,1-5.85-24.19S522,227.52,527.55,320.66c0,0-5.69-4.9-9.25-14.87,0,0-7.46,11-12.41,36.61-4.85,22.51-7.14,54-7.14,54,.13-16.77-8.69-46.09-12.27-57.29C481.16,307.3,471,278.5,452.7,263.28c0,0,2.53,7.9-8.3,19.21,0,0-7.83-81.52-85.95-141,0,0,8.19,20.56-.41,32.84,0,0-29.59-73.83-83.68-91.39,0,0,9,14,7.06,30.31,0,0-31.13-45.13-84.74-62,0,0,7.39,13.87,3,24.79,0,0-37-51.95-92.39-44.95,0,0,12.57,8.18,8.18,25.26C115.44,56.4,56.1,2,.28,25c0,0-5.22,40.32,29.41,76.85,0,0-9.6.12-16-4.62,0,0-19.09,38.78,49.46,107.8,0,0-9.49,4.27-21.94.12,0,0,1.93,59.1,73.09,113.19,0,0-10.47,3.83-15.69,1.85,0,0,27.63,52.78,99.5,81A52,52,0,0,1,173.91,407s53.61,63.73,146.75,58.19c0,0-4.9,5.69-14.87,9.25,0,0,7.12,4.82,23.18,9.28,21.27,8,91.82,10.59,91.82,10.59-10.91,1.84-27,6.31-43.7,11.44-42.68,3.55-85.62,13.49-105.47,37.4,0,0,7.9-2.53,19.21,8.3,0,0-81.52,7.83-141,85.95,0,0,20.56-8.19,32.84.41,0,0-73.83,29.59-91.39,83.67,0,0,14-9,30.31-7,0,0-45.13,31.13-62,84.74,0,0,13.87-7.4,24.79-3,0,0-52,37-45,92.39,0,0,8.18-12.57,25.26-8.18,0,0-54.36,59.34-31.43,115.16,0,0,40.32,5.22,76.85-29.41,0,0,.12,9.6-4.62,16,0,0,38.78,19.09,107.8-49.46,0,0,4.27,9.49.12,21.94,0,0,59.1-1.94,113.19-73.1,0,0,3.83,10.48,1.85,15.7,0,0,52.78-27.63,81-99.51a52,52,0,0,1,5.85,24.2s63.73-53.61,58.19-146.75c0,0,5.69,4.9,9.25,14.87,0,0,19.18-28.29,16.39-99.78,3.85,14.84,7.89,29.14,11.61,41.73,4.2,39.44,14.36,77.63,36.5,96,0,0-2.53-7.91,8.3-19.22,0,0,7.83,81.52,85.95,141,0,0-8.18-20.56.41-32.83,0,0,29.59,73.83,83.68,91.38,0,0-9-14-7.06-30.3,0,0,31.13,45.12,84.74,62,0,0-7.39-13.87-3-24.78,0,0,37,51.94,92.39,45,0,0-12.57-8.19-8.18-25.26,0,0,59.34,54.35,115.16,31.42C999.72,966.35,1004.94,926,970.31,889.5ZM499.57,517.66C381.15,592.75,144.65,854.75,144.65,854.75c34-84.53,218.09-288.31,342.57-358.25C410.92,377.61,151,143,151,143,235.42,177,438.56,360.41,508.88,484.87c126.6-72,353.7-341.72,353.7-341.72-10.58,66.61-228.87,298-342.5,362.62C590.76,632.07,862.64,861,862.64,861,795.87,850.35,563.52,631.06,499.57,517.66Z"
        />
      </svg>
    ),
  },
  {
    name: "Scanner",
    route: "/scanner",
    description: "Web camera module for scanning passes",
    icon: <CameraIcon className="h-6 w-6 text-white" />,
  },
];

export default function Example() {
  const router = useRouter();

  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center text-center">
          <svg height="60" viewBox="0 0 148 41" fill="none">
            <path
              d="M15.966 19.118a6.22 6.22 0 0 0-.308-1.98 4.579 4.579 0 0 0-.88-1.65 4.02 4.02 0 0 0-1.518-1.1c-.601-.279-1.305-.418-2.112-.418-1.57 0-2.808.447-3.718 1.342-.894.895-1.466 2.163-1.716 3.806h10.252ZM5.604 22.396c.088 1.159.294 2.163.616 3.014.323.836.748 1.533 1.276 2.09a5.199 5.199 0 0 0 1.87 1.232c.734.264 1.54.396 2.42.396.88 0 1.636-.103 2.266-.308a10.117 10.117 0 0 0 1.672-.682c.484-.25.902-.477 1.254-.682.367-.205.719-.308 1.056-.308.455 0 .792.169 1.012.506l1.562 1.98a9.298 9.298 0 0 1-2.024 1.782c-.748.47-1.532.85-2.354 1.144-.806.279-1.635.477-2.486.594a17.57 17.57 0 0 1-2.442.176c-1.57 0-3.028-.257-4.378-.77a9.997 9.997 0 0 1-3.52-2.31c-.997-1.027-1.782-2.288-2.354-3.784-.572-1.51-.858-3.256-.858-5.236 0-1.54.25-2.985.748-4.334.499-1.364 1.21-2.545 2.134-3.542.939-1.012 2.076-1.811 3.41-2.398 1.35-.587 2.868-.88 4.554-.88 1.423 0 2.736.227 3.938.682a8.51 8.51 0 0 1 3.102 2.002c.866.865 1.54 1.936 2.024 3.212.499 1.261.748 2.706.748 4.334 0 .821-.088 1.379-.264 1.672-.176.279-.513.418-1.012.418H5.604Zm26.633 10.956c-1.965 0-3.476-.55-4.532-1.65-1.041-1.115-1.562-2.647-1.562-4.598V14.498h-2.31a1.06 1.06 0 0 1-.748-.286c-.205-.19-.308-.477-.308-.858v-2.156l3.63-.594 1.144-6.16c.074-.293.213-.52.418-.682.206-.161.47-.242.792-.242h2.816v7.106h6.028v3.872h-6.028V26.73c0 .704.169 1.254.506 1.65.352.396.829.594 1.43.594.338 0 .616-.037.836-.11.235-.088.433-.176.594-.264.176-.088.33-.169.462-.242a.71.71 0 0 1 .396-.132c.162 0 .294.044.396.132.103.073.213.19.33.352l1.628 2.64a8.225 8.225 0 0 1-2.728 1.496c-1.026.337-2.09.506-3.19.506Zm14.281-20.504a11.798 11.798 0 0 1 2.904-2.002c1.056-.513 2.296-.77 3.718-.77 1.232 0 2.325.213 3.278.638.954.41 1.746.997 2.376 1.76.646.748 1.13 1.65 1.452 2.706.338 1.041.506 2.193.506 3.454V33h-5.434V18.634c0-1.379-.315-2.442-.946-3.19-.63-.763-1.59-1.144-2.882-1.144-.938 0-1.818.213-2.64.638-.82.425-1.598 1.005-2.332 1.738V33h-5.434V.308h5.434v12.54Z"
              fill="#4F46E5"
            ></path>
            <path
              d="M71.354 27.148c.616.748 1.284 1.276 2.002 1.584a6.074 6.074 0 0 0 2.376.462c.822 0 1.562-.154 2.222-.462a4.27 4.27 0 0 0 1.672-1.408c.47-.63.829-1.423 1.078-2.376.25-.968.374-2.105.374-3.41 0-1.32-.11-2.435-.33-3.344-.205-.924-.506-1.672-.902-2.244-.396-.572-.88-.99-1.452-1.254-.557-.264-1.195-.396-1.914-.396-1.129 0-2.09.242-2.882.726-.792.47-1.54 1.137-2.244 2.002v10.12Zm-.286-13.64a11.774 11.774 0 0 1 3.146-2.53c1.174-.645 2.552-.968 4.136-.968 1.232 0 2.354.257 3.366.77 1.027.513 1.907 1.261 2.64 2.244.748.968 1.32 2.17 1.716 3.608.411 1.423.616 3.058.616 4.906 0 1.687-.227 3.249-.682 4.686-.454 1.437-1.107 2.684-1.958 3.74a8.972 8.972 0 0 1-3.058 2.486c-1.188.587-2.522.88-4.004.88-1.261 0-2.339-.19-3.234-.572a8.073 8.073 0 0 1-2.398-1.628v9.24H65.92V10.428h3.322c.704 0 1.166.33 1.386.99l.44 2.09Zm31.784 9.856c-1.569.073-2.89.213-3.96.418-1.07.19-1.928.44-2.574.748-.645.308-1.107.667-1.386 1.078-.279.41-.418.858-.418 1.342 0 .953.279 1.635.836 2.046.572.41 1.313.616 2.222.616 1.115 0 2.075-.198 2.882-.594.821-.41 1.621-1.027 2.398-1.848v-3.806ZM90.4 13.574c2.596-2.376 5.72-3.564 9.372-3.564 1.32 0 2.501.22 3.542.66a7.303 7.303 0 0 1 2.64 1.804c.719.763 1.261 1.68 1.628 2.75.381 1.07.572 2.244.572 3.52V33h-2.464c-.513 0-.909-.073-1.188-.22-.279-.161-.499-.477-.66-.946l-.484-1.628a21.38 21.38 0 0 1-1.672 1.364c-.543.381-1.107.704-1.694.968a8.631 8.631 0 0 1-1.892.594c-.66.147-1.393.22-2.2.22a8.904 8.904 0 0 1-2.64-.374 5.935 5.935 0 0 1-2.09-1.166 5.186 5.186 0 0 1-1.364-1.914c-.322-.763-.484-1.65-.484-2.662 0-.572.096-1.137.286-1.694.19-.572.499-1.115.924-1.628.44-.513 1.005-.997 1.694-1.452.69-.455 1.533-.85 2.53-1.188 1.012-.337 2.186-.609 3.52-.814 1.335-.22 2.86-.352 4.576-.396v-1.32c0-1.51-.323-2.625-.968-3.344-.645-.733-1.577-1.1-2.794-1.1-.88 0-1.613.103-2.2.308a8.584 8.584 0 0 0-1.518.704c-.44.25-.843.477-1.21.682a2.314 2.314 0 0 1-1.188.308c-.381 0-.704-.095-.968-.286a2.627 2.627 0 0 1-.638-.704l-.968-1.738Zm36.644 1.254c-.147.235-.301.403-.462.506-.161.088-.367.132-.616.132-.264 0-.55-.073-.858-.22a25.245 25.245 0 0 0-1.034-.484 8.604 8.604 0 0 0-1.364-.506c-.499-.147-1.093-.22-1.782-.22-1.071 0-1.914.227-2.53.682-.601.455-.902 1.049-.902 1.782 0 .484.154.895.462 1.232.323.323.741.609 1.254.858.528.25 1.122.477 1.782.682.66.19 1.327.403 2.002.638a20.14 20.14 0 0 1 2.024.814c.66.293 1.247.675 1.76 1.144a4.983 4.983 0 0 1 1.254 1.65c.323.645.484 1.423.484 2.332 0 1.085-.198 2.09-.594 3.014a6.489 6.489 0 0 1-1.716 2.376c-.763.66-1.709 1.18-2.838 1.562-1.115.367-2.405.55-3.872.55-.777 0-1.54-.073-2.288-.22a13.072 13.072 0 0 1-2.134-.572 12.434 12.434 0 0 1-1.892-.88 9.388 9.388 0 0 1-1.518-1.1l1.254-2.068c.161-.25.352-.44.572-.572.22-.132.499-.198.836-.198.337 0 .653.095.946.286.308.19.66.396 1.056.616.396.22.858.425 1.386.616.543.19 1.225.286 2.046.286.645 0 1.195-.073 1.65-.22.469-.161.851-.367 1.144-.616.308-.25.528-.535.66-.858.147-.337.22-.682.22-1.034 0-.528-.161-.96-.484-1.298-.308-.337-.726-.63-1.254-.88-.513-.25-1.107-.47-1.782-.66a106.42 106.42 0 0 1-2.046-.66 22.068 22.068 0 0 1-2.046-.814 7.488 7.488 0 0 1-1.782-1.21 5.662 5.662 0 0 1-1.254-1.782c-.308-.704-.462-1.555-.462-2.552 0-.924.183-1.804.55-2.64a6.15 6.15 0 0 1 1.606-2.178c.719-.63 1.606-1.13 2.662-1.496 1.071-.381 2.303-.572 3.696-.572 1.555 0 2.97.257 4.246.77 1.276.513 2.339 1.188 3.19 2.024l-1.232 1.958Zm19.336 0c-.147.235-.301.403-.462.506a1.28 1.28 0 0 1-.616.132c-.264 0-.55-.073-.858-.22a25.888 25.888 0 0 0-1.034-.484 8.604 8.604 0 0 0-1.364-.506c-.499-.147-1.093-.22-1.782-.22-1.071 0-1.914.227-2.53.682-.602.455-.902 1.049-.902 1.782 0 .484.154.895.462 1.232.322.323.74.609 1.254.858.528.25 1.122.477 1.782.682.66.19 1.327.403 2.002.638a20.14 20.14 0 0 1 2.024.814c.66.293 1.246.675 1.76 1.144a4.983 4.983 0 0 1 1.254 1.65c.322.645.484 1.423.484 2.332 0 1.085-.198 2.09-.594 3.014a6.512 6.512 0 0 1-1.716 2.376c-.763.66-1.709 1.18-2.838 1.562-1.115.367-2.406.55-3.872.55-.778 0-1.54-.073-2.288-.22a12.39 12.39 0 0 1-4.026-1.452 9.388 9.388 0 0 1-1.518-1.1l1.254-2.068c.161-.25.352-.44.572-.572.22-.132.498-.198.836-.198.337 0 .652.095.946.286.308.19.66.396 1.056.616.396.22.858.425 1.386.616.542.19 1.224.286 2.046.286.645 0 1.195-.073 1.65-.22.469-.161.85-.367 1.144-.616.308-.25.528-.535.66-.858a2.58 2.58 0 0 0 .22-1.034c0-.528-.162-.96-.484-1.298-.308-.337-.726-.63-1.254-.88-.514-.25-1.108-.47-1.782-.66a106.42 106.42 0 0 1-2.046-.66 21.848 21.848 0 0 1-2.046-.814 7.488 7.488 0 0 1-1.782-1.21 5.63 5.63 0 0 1-1.254-1.782c-.308-.704-.462-1.555-.462-2.552 0-.924.183-1.804.55-2.64a6.138 6.138 0 0 1 1.606-2.178c.718-.63 1.606-1.13 2.662-1.496 1.07-.381 2.302-.572 3.696-.572 1.554 0 2.97.257 4.246.77 1.276.513 2.339 1.188 3.19 2.024l-1.232 1.958Z"
              className="fill-[#111827]"
            ></path>
          </svg>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Sample integrations
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Here are some examples you can use to get started with integrating
            our API.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 justify-center">
            {features.map((feature) => (
              <button
                key={feature.name}
                className="pt-6"
                onClick={() => router.push(feature.route)}
              >
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}