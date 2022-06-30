import './App.css';
import MyTable from './components/MyTable';

function App() {

  const data = [
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "В ожидании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "В ожидании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "В ожидании", attStat: "Отказан", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "В ожидании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "В ожидании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "Отказан", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "pdf", name: "Чек операции", signStat: "На подписании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "В ожидании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "В ожидании", attStat: "Отказан", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "В ожидании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "В ожидании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "На подписании", attStat: "Отказан", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "doc", name: "Какой-то документ", signStat: "На подписании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "В ожидании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "В ожидании", attStat: "Отказан", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "На подписании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "В ожидании", attStat: "В ожидании", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "В ожидании", attStat: "Готов", ref: <a href="http://localhost:3000">Документ</a>},
  {type: "img", name: "Фото объекта", signStat: "На подписании", attStat: "Отказан", ref: <a href="http://localhost:3000">Документ</a>}
  ]

  return (
    <div className="App">
      <MyTable docs={data}/>
    </div>
  );
}

export default App;