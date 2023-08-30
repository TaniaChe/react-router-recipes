export const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Uh-Oh...</h1>
      <img
        width={550}
        src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
        alt="not found"
      />
      <h4 style={{ marginTop: "20px" }}>
        The page you are looking for may have been moved, deleted, or possibly
        never existed.
      </h4>
    </div>
  );
};
