import { useTrack } from "./helper/Instrumentalization";

function App() {
  const track = useTrack();

  return (
    <div className="App">
      <header className="App-header">
        <a
          onClick={(e) => {
            track("Hi Segment, another custom hook", {
              account_id: 1,
              distinct_id: "goku@dbz.com",
              name: "Goku",
            });
            track("Hi Segment, another custom hook", {
              account_id: 2,
              distinct_id: "saitama@punch.com",
              name: "Saitama",
            });
          }}
          className="App-link"
          href="#"
        >
          Track
        </a>
      </header>
    </div>
  );
}

export default App;

//segment-token: yyrJ2y9wvh5IsuSRSn7z-fzjiwOlFlUXq0Ohnt0h8DE.9CGO3XcP44EtspUNoao-AcZ2wyM734an0JiqQDRvFow

// {
//   "name": "workspaces/arthur-valentim-kasper/sources/js",
//   "parent": "workspaces/arthur-valentim-kasper",
//   "display_name": "js",
//   "write_keys": [
//    "2qexT5tmXGmTbVw0Rs75hLnPueW7GEB6"
//   ],
//   "library_config": {
//    "metrics_enabled": false,
//    "retry_queue": false,
//    "cross_domain_id_enabled": false,
//    "api_host": ""
//   },
//   "labels": {},
//   "id": "6fvQdVDGlF",
//   "function_config": [],
//   "create_time": "2022-02-18T01:06:37Z",
//   "catalog_name": "catalog/sources/javascript"
// }
