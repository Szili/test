import React, { useEffect, useState } from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log("data: ", data);

  return (
    <div className="App">
      <GridComponent dataSource={data}>
        <ColumnsDirective>
          <ColumnDirective
            field="id"
            headerText="Id"
            max-width="100"
            textAlign="Left"
          />
          <ColumnDirective field="completed" headerText="Completed" />
          <ColumnDirective field="title" headerText="Title" textAlign="Left" />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
}

export default App;
