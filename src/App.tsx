import React from 'react';
import './App.css';
import RootRenderer from './container/RootRenderer';
import { DbLoadResponse } from './Models/DbLoadResponse';


const data: DbLoadResponse = {
  roots: [
    {
      name: "Branch-1",
      children: [
        {
          name: "Leaf-1",
          group: "G1"
        },
        {
          name: "Leaf-2",
          group: "G1"
        },
        {
          name: "Leaf-3",
          group: "G1"
        }, {
          name: "Branch-2",
          children: [
            {
              name: "Leaf-4",
              group: "G2"
            },
            {
              name: "Leaf-5",
              group: "G2"
            },
            {
              name: "Branch-3",
              children: [
                {
                  name: "Leaf-4",
                  group: "G3"
                },
                {
                  name: "Leaf-5",
                  group: "G3"
                },
                {
                  name: "Leaf-6",
                  group: "G3"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Branch-1",
      children: [
        {
          name: "Leaf-1",
          group: "Leaf-1-Branch-1"
        },
        {
          name: "Leaf-2",
          group: "Leaf-2-Branch-1"
        },
        {
          name: "Leaf-3",
          group: "Leaf-3-Branch-1"
        }, {
          name: "Branch-2",
          children: [
            {
              name: "Leaf-4",
              group: "Leaf-1-Branch-2"
            },
            {
              name: "Leaf-5",
              group: "Leaf-2-Branch-2"
            },
            {
              name: "Leaf-6",
              children: [
                {
                  name: "Leaf-4",
                  group: "Leaf-1-Branch-2"
                },
                {
                  name: "Leaf-5",
                  group: "Leaf-2-Branch-2"
                },
                {
                  name: "Leaf-6",
                  group: "Leaf-3-Branch-2"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

function App() {

  return (
    <div className="root">
        <RootRenderer data={data}/>
    </div>
  );
}

export default App;
