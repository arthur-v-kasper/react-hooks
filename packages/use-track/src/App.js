import { useSegment } from "./helper/Instrumentalization";

function App() {
  const segment = useSegment();

  return (
    <div className="App">
      <header className="App-header">
        <a
          onClick={(e) => {
            segment.track("Hi!!", {
              id: 3,
              email: "gohan@dbz.com",
              name: "Gohan",
            });
            // segment.track("Hi Segment, email reference", {
            //   account_id: 3,
            //   email: "vegeta@capsulacorp.com",
            //   food: "MEAT",
            // });
            // segment.group("123", {
            //   company_id: 2,
            //   name: "Hero Onepunch",
            //   industry: "Monster Hunter",
            // });
            // segment.identify("jiraiya-sensei", {
            //   name: "Jiraiya",
            //   email: "jiraiya@frog.com",
            //   hobby: "Sleep",
            // });
          }}
          className="App-link"
          href="#"
        >
          Send event to segment
        </a>
      </header>
    </div>
  );
}

export default App;

/**
 * Quando uma vez for executado o identify, é gerado um cookie e localstorage 
 * que reutiliza as infos para atrelar os próximos evios ao usuário existente no cookie.
 */
