const WorkSteps = () => {
  return (
    <div className="w-full max-w-screen px-4 sm:px-12">
      <div className="relative flex flex-col items-center justify-center space-y-20 py-20 md:py-32">
        <div className="relative flex items-center justify-center gap-4 mb-5 ">
          <div className="relative text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 inline-flex rounded whitespace-nowrap px-3 py-[3px] tracking-normal before:absolute before:inset-0 before:rounded before:[background-image:linear-gradient(120deg,transparent_0%,theme(colors.sky.400/.12)_33%,theme(colors.sky.300/.12)_66%,theme(colors.sky.200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,theme(colors.sky.400/.16),theme(colors.sky.600/.16)_50%,transparent_100%)] shadow">
            <div
              className="absolute -inset-1.5 bg-sky-500/15 dark:bg-gray-800/65 rounded -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.sky.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.sky.500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.sky.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.sky.500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)]"
              aria-hidden="true"
            ></div>
            <span className="relative text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-sky-500 dark:to-sky-50">
              Our Working in just Six Simple Steps
            </span>
          </div>
        </div>
        <h1
          className="font-inter-tight text-3xl md:text-6xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-violet-200 dark:to-gray-200 pb-4"
          style={{ marginTop: "10px", marginBottom: "40px" }}
        >
          How MayaPe Works
        </h1>
        <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-sky-400 px-5 py-1 text-md text-white">
              Step 1
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Verify Your Business
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Once you have decided to be our partner, our team will ask you
              share certain details regarding your business, to tailor a
              solution for your case. A thorough analysis will be done by our
              team for your business.
            </p>
          </div>
          <div className="bg-gradient-to-l from-sky-200 via-sky-50 rounded-sm ">
            <img
              src="/verifyGif.gif"
              width="450"
              height="400"
              alt="Step 1"
              className="mx-auto overflow-hidden rounded-xl object-center  "
            />
          </div>
        </section>

        <svg
          width="400"
          height="400"
          viewBox="0 0 100 200"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block"
          style={{ marginTop: 0 }}
        >
          <path
            d="M -150 50 C 40 10, 60 10, 90 50 S 140 190, 290 90 10"
            stroke="#0ea5e9"
            strokeWidth="3"
            fill="none"
            transform="rotate(90, 50, 50)"
            strokeDasharray={"11,15"}
          />
        </svg>

        <section className="flex sm:grid flex-col-reverse sm:grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="bg-gradient-to-r from-blue-200 via-sky-50 rounded-sm ">
            <img
              src="/step2Gif.gif"
              width="450"
              height="400"
              alt="Step 2"
              className="mx-auto overflow-hidden rounded-xl object-center  "
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-sky-400 px-5 py-1 text-md text-white">
              Step 2
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Receive a Unique Dashboard
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Upon successful business verification you will be handed a
              visually appealing and user-friendly interface that aligns with
              your brand and objectives.
            </p>
          </div>
        </section>

        <svg
          width="400"
          height="400"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: 0 }}
          className="hidden sm:block"
        >
          <path
            d="M 0 -150 C 10 40, 10 60, 120 90 S 220 140, 90 290"
            stroke="#0ea5e9"
            strokeWidth="3"
            fill="none"
            strokeDasharray={"11,15"}
          />
        </svg>

        <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-sky-400 px-5 py-1 text-md text-white">
              Step 3
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start Accepting The Payments:
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The dashboard will have a unified QR Code that can accept payments
              from multiple UPI (Unified Payments Interface) apps, such as
              Google Pay, PhonePe, Paytm, and others.
            </p>
          </div>
          <div className="bg-gradient-to-l from-sky-200 via-sky-50 rounded-sm ">
            <img
              src="/step3Gif.gif"
              width="450"
              height="400"
              alt="Step 3"
              className="mx-auto overflow-hidden rounded-xl object-center  "
            />
          </div>
        </section>

        <svg
          width="400"
          height="400"
          viewBox="0 0 100 200"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block"
          style={{ marginTop: 0 }}
        >
          <path
            d="M -150 50 C 40 10, 60 10, 90 50 S 140 190, 290 90 10"
            stroke="#0ea5e9"
            strokeWidth="3"
            fill="none"
            transform="rotate(90, 50, 50)"
            strokeDasharray={"11,15"}
          />
        </svg>

        <section className="flex sm:grid flex-col-reverse sm:grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="bg-gradient-to-r from-sky-200 via-sky-50 rounded-sm py-4 w-full">
            <img
              src="/step4Svg.svg"
              width="250"
              height="250"
              alt="Step 4"
              className="mx-auto overflow-hidden rounded-xl object-center animate-bounce	duration-4000"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-sky-400 px-5 py-1 text-md text-white">
              Step 4
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Payment Processing:
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Once the payment is processed successfully, the funds are
              instantly transferred to the merchant's MayaPe account.
            </p>
          </div>
        </section>

        <svg
          width="400"
          height="400"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: 0 }}
          className="hidden sm:block"
        >
          <path
            d="M 0 -150 C 10 40, 10 60, 120 90 S 220 140, 90 290"
            stroke="#0ea5e9"
            strokeWidth="3"
            fill="none"
            strokeDasharray={"11,15"}
          />
        </svg>

        <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-sky-400 px-5 py-1 text-md text-white">
              Step 5
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Fund Transfer to Merchant’s Bank Account:
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe in continuous improvement. After deployment, we'll
              regularly review the solution and make updates to ensure it
              remains effective and efficient, adapting to your evolving needs.
            </p>
          </div>
          <div className="bg-gradient-to-l from-sky-200 via-sky-50 rounded-sm ">
            <img
              src="/step5Gif.gif"
              width="450"
              height="400"
              alt="Step 5"
              className="mx-auto overflow-hidden rounded-xl object-center  "
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkSteps;
