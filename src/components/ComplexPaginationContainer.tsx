// import React, { type ReactNode } from 'react';

// const ComplexPaginationContainer = () => {
//   let page: number;
//   page = 9;

//   const addPageButtons = () => {
//     return (
//       <button key={} className={`${active}`}>
//         {pageN}
//       </button>
//     );
//   };
//   const renderPageButtons = () => {
//     let pageButtons: ReactNode[];
//     pageButtons = [];

//     pageButtons.push(addPageButtons({ pageNumber: 1, activeStyles: true }));

//     return pageButtons;
//   };
//   if (page < 2) return null;
//   return (
//     <div className="join">
//       <div className="join-item">prev</div>
//       {renderPageButtons()}
//       <button className="join-item">next</button>
//     </div>
//   );
// };

// export default ComplexPaginationContainer;
