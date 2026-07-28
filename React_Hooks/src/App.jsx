import EmployeeDashboard from './components/useState';
import UseEffectExample from './components/useEffect';
import UseContext from './components/UseContext';
import UseRef from './components/UseRef';
import UseReducer from './components/UseReducer';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';
import CustomHook from './components/CustomHook';

function App() {
  return (
    <>
      <EmployeeDashboard />
      <hr />
      <h2>useContext</h2>
      <UseContext />
      <hr />
      <h2>useRef</h2>
      <UseRef />
      <hr />
      <h2>useReducer</h2>
      <UseReducer />
      <hr />
      <h2>useMemo</h2>
      <UseMemo />
      <hr />
      <h2>useCallback</h2>
      <UseCallback />
      <hr />
      <h2>useEffect</h2>
      <UseEffectExample />
      <hr />
      <h2>Custom Hook</h2>
      <CustomHook />
    </>
  );
}

export default App;
