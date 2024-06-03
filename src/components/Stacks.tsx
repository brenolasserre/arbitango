// import Stack from "./Stack";

// interface Coin {
//   ticker: string;
//   nombre: string;
//   icon: string;
// }

// const coinData: Coin[] = [
//   {
//     ticker: "BTC",
//     nombre: "Bitcoin",
//     icon: "/coins/btc.svg",
//   },
//   {
//     ticker: "ETH",
//     nombre: "Ethereum",
//     icon: "/coins/eth.svg",
//   },
//   {
//     ticker: "ADA",
//     nombre: "Cardano",
//     icon: "/coins/ada.svg",
//   },
//   {
//     ticker: "DAI",
//     nombre: "Dai",
//     icon: "/coins/dai.svg",
//   },
//   {
//     ticker: "SOL",
//     nombre: "Solana",
//     icon: "/coins/sol.svg",
//   },
//   {
//     ticker: "BNB",
//     nombre: "Binance Coin",
//     icon: "/coins/bnb.svg",
//   },
//   {
//     ticker: "DOT",
//     nombre: "Polkadot",
//     icon: "/coins/dot.svg",
//   },
//   {
//     ticker: "USDC",
//     nombre: "Usdc",
//     icon: "/coins/usdc.svg",
//   },
// ];

// const Stacks = () => {
//   return (
//     <>
//       {coinData.map((coin) => (
//         <div key={coin.ticker} className="flex-col flex">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <img loading="eager" src={coin.icon} alt={coin.nombre} />
//               <div className="flex items-baseline gap-2">
//                 <h5 className="font-bold text-[#EEEEEC] text-xl">
//                   {coin.ticker}
//                 </h5>
//                 <p className="font-semibold text-[13px] m-0 text-[#B5B3AD]">
//                   {coin.nombre}
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* <Stack /> */}
//         </div>
//       ))}
//     </>
//   );
// };

// export default Stacks;
