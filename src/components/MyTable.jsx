import React from "react";
import './MyTable.css';

function MyTable(props) {
    const { docs } = props;
    const [sortConfig, setSortConfig] = React.useState(null);

    React.useMemo(() => {
      if (sortConfig != null) {
        docs.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
    }, [docs, sortConfig]);

    const requestSort = key => {
      let direction = 'ascending';
      if (sortConfig != null) {
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
      }
      setSortConfig({ key, direction});
    }

    return (
      <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => requestSort('type')}>
              Тип документа
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort('name')}>
              Название документа
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort('signStat')}>
              Статус подписания документа
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort('attStat')}>
              Статус прикрепления документа
              </button>
            </th>
            <th>
              <button type="button">
              Ссылка на документ
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc, i) => (
            <tr key={i}>
              <td>{doc.type}</td>
              <td>{doc.name}</td>
              <td>{doc.signStat}</td>
              <td>{doc.attStat}</td>
              <td align="center">{doc.ref}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }

  export default MyTable;
