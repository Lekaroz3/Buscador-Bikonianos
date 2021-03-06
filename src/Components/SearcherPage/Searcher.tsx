import { useRef } from "react";

function Searcher(props: any) {
  const textFilterInput = useRef(null);

  function onSubmitHandle(event: any) {
    event.preventDefault();

    const inputFiltro: any = textFilterInput.current;
    if (inputFiltro) {
      props.setText(inputFiltro.value);
    }
  }

  return (
    <div className="mb-5 mt-4">
      <form className="row g-3" onSubmit={onSubmitHandle}>
        <div className="col-7 mr-4">
          <input
            ref={textFilterInput}
            type="text"
            id="inputFiltro"
            className="form-control form-control-lg pr-0"
            aria-label="Amount (to the nearest dollar)"
            placeholder="Nombre Bikoniano"
          />
        </div>
        <div className="input-group-append">
          <button id="btnBuscarFiltro" className="btn" type="submit">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searcher;
