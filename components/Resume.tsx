export default function Resume() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          {/* Title */}

          <h1 className="flex-grow">
            <span className="flex mb-1 text-3xl sm:text-4xl text-indigo-600 font-semibold tracking-wide uppercase">
              Jeff Hogg
            </span>
            <span className="prose-indigo prose text-base text-center leading-8 tracking-tight text-gray-900 ">
              Napa, CA <br />
              707-287-2123 <br />
              <a
                href="mailto:jeffhogg86@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Jeffhogg86@gmail.com
              </a>
            </span>
          </h1>

          {/* Summary */}
          <h1 className="mt-8 font-semibold">Summary</h1>
          <p className="mt-6 text-xl text-gray-500 leading-8">
            Fullstack developer with a background in broadcasting. Experienced
            with developing and deploying web applications, manipulating data,
            and solving algorithms. I have a passion for problem-solving and a
            demonstrated history of teamwork, collaboration and communication
            skills.
          </p>

          {/* Projects */}
          <h1 className="mt-8 font-semibold">Projects</h1>
          <p className="prose prose-indigo prose-lg mt-6 text-xl text-gray-500 leading-8">
            <a href="https://codetechtv.com/" target="_blank" rel="noreferrer">
              CodeTech TV
            </a>{' '}
            <br />A video player built with Next.js and YouTube’s API. Coding
            tutorials from my channel. Technologies: RESTful API’s, Next-auth
          </p>
          <p className="prose prose-indigo prose-lg mt-6 text-xl text-gray-500 leading-8">
            <a
              href="https://github.com/bosshogg86/Iron-Dojo"
              target="_blank"
              rel="noreferrer"
            >
              Iron Dojo
            </a>{' '}
            <br />A react/redux web application to track your strength and
            conditioning sessions. Technologies: Front-end design/Material-UI,
            Routing, API’s, Google Oauth, Final Form
          </p>
          <p className="prose prose-indigo prose-lg mt-6 text-xl text-gray-500 leading-8">
            <a
              href="hoggle-search.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Hoggle Search
            </a>{' '}
            <br />A Google type search engine built with Next.js, Tailwind and
            the Google Search Api. Deployed with vercel.
          </p>

          {/* Experience */}
          <h1 className="mt-8 font-semibold">Experience</h1>
          <p className="prose prose-indigo mt-6 text-xl text-gray-500 leading-8">
            <a href="https://www.cisco.com/" target="_blank" rel="noreferrer">
              Cisco
            </a>{' '}
            - Technical Director
            <ul className="text-lg">
              <li>
                Strong teamwork and collaboration skills for live broadcasts.
              </li>
              <li>
                Worked directly with executives. In-person and remote
                broadcasts.
              </li>
            </ul>
          </p>

          <p className="prose prose-indigo mt-6 text-xl text-gray-500 leading-8">
            <a
              href="https://www.bafaia119.com/"
              target="_blank"
              rel="noreferrer"
            >
              BAFA/IATSE 119
            </a>{' '}
            - Technical Director
            <ul className="text-lg">
              <li>
                Operate cameras, switchers, and video for live sports broadcasts
                and video boards.
              </li>
              <li>
                Worked high-profile events such as the Super Bowl, NBA Finals
                and the World Series.
              </li>
            </ul>
          </p>

          {/* Education */}
          <h1 className="mt-8 font-semibold">Education</h1>

          <p className="prose prose-indigo mt-6 text-xl text-gray-500 leading-8">
            University of California, Berkeley - Certificate, Fullstack Web
            Development
          </p>
          <p className="prose prose-indigo mt-2 text-xl text-gray-500 leading-8">
            San Francisco State University - Bachelor of Arts, Broadcast
            Communications
          </p>
          <p className="prose prose-indigo mt-2 text-xl text-gray-500 leading-8">
            Napa Valley College - Associate of Science, Broadcast Engineering
          </p>
        </div>
      </div>
    </div>
  );
}
