"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Cedarville_Cursive } from "next/font/google";
import { parseArgs } from "util";

export default function Home() {
  const [cExpression, setExpression] = useState("");

  function handleInput(e: any) {
    setExpression(cExpression.concat(e.target.value));
  }

  const [cTotal, setTotal] = useState();

  function calculate() {
    setTotal(eval(cExpression));
  }
  function clear() {
    setExpression("");
    setTotal(undefined);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#DBFCFF]">
      <div className=" m-auto border-[0.5vw] h-[30vw] w-[30%] border-black flex flex-wrap bg-[#646a8e]">
        <div className=" bg-black w-[100%] h-[10%] text-sm text-right font-[didot]">
          {(cTotal === undefined && <div>{cExpression}</div>) || (
            <div>{cTotal}</div>
          )}
        </div>
        <Button
          className=" w-[50%] rounded-none bg-[#C02163] h-[18%] hover:bg-[#4a4e69] border-[0.1vw] border-black"
          onClick={clear}
        >
          AC
        </Button>
        <Button
          className=" bg-[#646a8e] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={"/"}
          onClick={handleInput}
        >
          /
        </Button>
        <Button
          className=" bg-[#646a8e] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={"*"}
          onClick={handleInput}
        >
          X
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={7}
          onClick={handleInput}
        >
          7
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={8}
          onClick={handleInput}
        >
          8
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={9}
          onClick={handleInput}
        >
          9
        </Button>
        <Button
          className=" bg-[#646a8e] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={"-"}
          onClick={handleInput}
        >
          -
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={4}
          onClick={handleInput}
        >
          4
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={5}
          onClick={handleInput}
        >
          5
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={6}
          onClick={handleInput}
        >
          6
        </Button>
        <Button
          className=" bg-[#646a8e] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={"+"}
          onClick={handleInput}
        >
          +
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={1}
          onClick={handleInput}
        >
          1
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={2}
          onClick={handleInput}
        >
          2
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={3}
          onClick={handleInput}
        >
          3
        </Button>
        <Button
          className=" bg-[#646a8e] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          onClick={calculate}
        >
          =
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[50%] h-[18%] border-[0.1vw] border-black"
          value={0}
          onClick={handleInput}
        >
          0
        </Button>
        <Button
          className=" bg-[#4a4e69] hover:bg-[#4a4e69] w-[25%] h-[18%] border-[0.1vw] border-black"
          value={"."}
        >
          .
        </Button>
      </div>
    </main>
  );
}
