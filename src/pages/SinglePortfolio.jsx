import { CircularProgress, Skeleton, Tooltip, Zoom } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ContentContainer, Header, NavButtonLinks } from "../components";
import { useGlobalContext } from "../provider/context";

const SinglePortfolio = () => {
  const [activeLink, setActiveLink] = useState("Portfolio");
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeFailed, setIframeFailed] = useState(false);
  const { works, loading } = useGlobalContext();
  const { id } = useParams();
  const iframeTimeoutRef = useRef(null);

  useEffect(() => {
    if (id) {
      const filteredPortfolio = works.filter((f) => f.slug === id)[0];
      setSelectedPortfolio(filteredPortfolio);
    }
  }, [id, works]);

  useEffect(() => {
    if (!selectedPortfolio?.site_url) return;
    setIframeLoading(true);
    setIframeFailed(false);
    iframeTimeoutRef.current = setTimeout(() => setIframeFailed(true), 8000);
    return () => clearTimeout(iframeTimeoutRef.current);
  }, [selectedPortfolio?.site_url]);

  const handleIframeLoad = () => {
    clearTimeout(iframeTimeoutRef.current);
    setIframeLoading(false);
  };

  return (
    <div className="">
      <Header>
        <div className="hidden md:flex md:gap-5">
          <NavButtonLinks
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      </Header>
      <ContentContainer
        title=""
        subtitle=""
        breadcrumb={[
          { title: "Portfolio", path: "/portfolio" },
          { title: selectedPortfolio?.name, path: "" },
        ]}
      >
        <section className="mt-8 md:mt-8 md:w-[90%] md:mx-auto">
          <article className="flex flex-col gap-6">
            <div>
              {loading && (
                <>
                  <h1 className="font-bold text-2xl text-isSecondary mb-3">
                    <Skeleton variant="text" width={200} height={40} />
                  </h1>
                  <p>
                    <Skeleton variant="text" width={400} height={10} />
                    <Skeleton variant="text" width={400} height={10} />
                  </p>

                  <div className="flex flex-col items-center gap-4 mt-6 md:flex-row">
                    <Skeleton variant="text" width={180} height={70} />
                  </div>
                </>
              )}
              <h1 className="font-bold text-2xl text-isSecondary mb-3">
                {selectedPortfolio?.name}
              </h1>
              <p>{selectedPortfolio?.description}</p>
              {
                !loading && (
                <div className="flex flex-col items-center gap-4 mt-6 md:flex-row">
                  {selectedPortfolio?.code_url && <NavLink
                    to={selectedPortfolio?.code_url}
                    target="_blank"
                    className="bg-isSecondary text-[#ffffffff] p-2.5 px-8 rounded-md"
                  >
                    View on Github
                  </NavLink>}
                  <NavLink
                    to={selectedPortfolio?.site_url}
                    target="_blank"
                    className="bg-isPrimary text-[#ffffffff] p-2.5 px-14 rounded-md"
                  >
                    View Live
                  </NavLink>
                </div>
                )
              }
            </div>
            <div className="relative">
              {loading && (
                <Skeleton variant="text" width={400} height={300} />
              )}
              {!loading && selectedPortfolio && (
                <Tooltip
                  title="View Full Screen"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <div className="relative border-2 border-gray-300 rounded-xl overflow-hidden w-full aspect-video bg-white">
                    {!iframeFailed && iframeLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                        <CircularProgress />
                      </div>
                    )}
                    {!iframeFailed ? (
                      <iframe
                        key={selectedPortfolio?.site_url}
                        className="w-full h-full"
                        src={selectedPortfolio?.site_url}
                        title={selectedPortfolio?.name}
                        onLoad={handleIframeLoad}
                        onError={() => setIframeFailed(true)}
                      />
                    ) : (
                      <NavLink to={selectedPortfolio?.site_url} target="_blank">
                        <img
                          className="w-full h-full object-cover"
                          src={selectedPortfolio?.img_url}
                          loading="lazy"
                          alt=""
                        />
                      </NavLink>
                    )}
                  </div>
                </Tooltip>
              )}
            </div>

            
          </article>
        </section>
      </ContentContainer>
    </div>
  );
};

export default SinglePortfolio;
