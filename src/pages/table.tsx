import { usePageController } from "../providers";

export default function Table() {
  const [state, { changeIndex }] = usePageController();
  return (
    <main>
      <h1>Index</h1>
      <ul>
        <li>
          <button onClick={() => changeIndex!(3)}>Introduction</button>
        </li>
        <li>
          <button onClick={() => changeIndex!(4)}>My Diary</button>
        </li>
        <li>
          <button onClick={() => changeIndex!(5)}>Trendy Magazine</button>
        </li>
        <li>
          <button onClick={() => changeIndex!(6)}>Photo Essay</button>
        </li>
        <li>
          <button onClick={() => changeIndex!(7)}>Book Covers</button>
        </li>
        <li>
          <button onClick={() => changeIndex!(8)}>Film Analysis</button>
        </li>
        <li>
          <button onClick={() => changeIndex!(9)}>
            National or Country Problem
          </button>
        </li>
        <li>
          <button onClick={() => changeIndex!(10)}>Conclusion</button>
        </li>
      </ul>
    </main>
  );
}
