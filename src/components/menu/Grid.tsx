import React from "react";

export default function Grid() {
  return (
    // <div className="grid grid-cols-4 grid-rows-3 gap-3 px-4 md:px-[5%]">
    //   <div className=" bg-purple-400  bg-gradient-to-r  from-slate-300 to-slate-500 h-[200px] flex items-center justify-center rounded-lg">1</div>
    //   <div className="col-span-2 bg-gradient-to-r from-purple-200 to-indigo-500  border-emerald-600 h-[200px] flex items-center justify-center rounded-lg">2</div>
    //   <div className="col-start-4 bg-gradient-to-r from-rose-200 to-rose-400 h-[200px] flex items-center justify-center rounded-lg">3</div>
    //   <div className="col-span-2 row-start-2 bg-gradient-to-r from-cyan-100 to-cyan-400 h-[200px] flex items-center justify-center rounded-lg">4</div>
    //   <div className="col-span-2 col-start-3 row-start-2 bg-gradient-to-l from-emerald-300 to-emerald-500 h-[200px] flex items-center justify-center rounded-lg">5</div>
    //   <div className="row-start-3 bg-gradient-to-r from-fuchsia-200 bg-fuchsia-400 h-[200px] flex items-center justify-center rounded-lg">6</div>
    //   <div className="row-start-3 bg-gradient-to-r from-amber-100 to-amber-300 h-[200px] flex items-center justify-center rounded-lg">7</div>
    //   <div className="col-span-2 row-start-3 bg-gradient-to-r from-fuchsia-200 to-fuchsia-500 h-[200px] flex items-center justify-center rounded-lg">8</div>
    // </div>
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-3 px-4 md:px-[5%]">
        <div className="h-[200px] border-2 border-shade p-[3px] flex items-center justify-center rounded-lg">
          1
        </div>
        <div className="col-span-2 border-2 border-white h-[200px] flex items-center justify-center rounded-lg">
          2
        </div>
        <div className="col-start-4 bg-gradient-to-r from-rose-200 to-rose-400 h-[200px] flex items-center justify-center rounded-lg">
          3
        </div>
        <div className="col-span-2 row-start-2 bg-gradient-to-r from-cyan-100 to-cyan-400 h-[200px] flex items-center justify-center rounded-lg">
          4
        </div>
        <div className="col-span-2 col-start-3 row-start-2 bg-gradient-to-l from-emerald-300 to-emerald-500 h-[200px] flex items-center justify-center rounded-lg">
          5
        </div>
        <div className="row-start-3 bg-gradient-to-r from-fuchsia-200 bg-fuchsia-400 h-[200px] flex items-center justify-center rounded-lg">
          6
        </div>
        <div className="row-start-3 bg-gradient-to-r from-amber-100 to-amber-300 h-[200px] flex items-center justify-center rounded-lg">
          7
        </div>
        <div className="col-span-2 row-start-3 bg-gradient-to-r from-fuchsia-200 to-fuchsia-500 h-[200px] flex items-center justify-center rounded-lg">
          8
        </div>
      </div>
    </>
  );
}
