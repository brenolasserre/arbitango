import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

interface Coin {
  ticker: string;
  nombre: string;
  icon: string;
}

const coinData: Coin[] = [
  {
    ticker: "BTC",
    nombre: "Bitcoin",
    icon: "/coins/btc.svg",
  },
  {
    ticker: "ETH",
    nombre: "Ethereum",
    icon: "/coins/eth.svg",
  },
  {
    ticker: "ADA",
    nombre: "Cardano",
    icon: "/coins/ada.svg",
  },
  {
    ticker: "DAI",
    nombre: "Dai",
    icon: "/coins/dai.svg",
  },
  {
    ticker: "SOL",
    nombre: "Solana",
    icon: "/coins/sol.svg",
  },
  {
    ticker: "BNB",
    nombre: "Binance Coin",
    icon: "/coins/bnb.svg",
  },
  {
    ticker: "DOT",
    nombre: "Polkadot",
    icon: "/coins/dot.svg",
  },
  {
    ticker: "USDC",
    nombre: "Usdc",
    icon: "/coins/usdc.svg",
  },
];

const Stack = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = useMemo(
    () => [
      {
        id: 1,
        tipo: "Comprá en",
        title: "Cocos Crypto",
        svg: "/exchanges/cocos.webp",
      },
      {
        id: 2,
        tipo: "Vendé en",
        title: "Ripio",
        svg: "/exchanges/ripio.webp",
      },
      {
        id: 3,
        tipo: "Invertí en",
        title: "Binance",
        svg: "/exchanges/binance.webp",
      },
    ],
    []
  );

  const handleNextClick = useCallback(() => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  }, [cards.length]);

  const handlePrevClick = useCallback(() => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  }, [cards.length]);

  return (
    <div className="w-full grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-1 grid-rows-4 lg:gap-12 gap-6">
      {coinData.map((coin) => (
        <>
          <div key={coin.ticker} className="flex-col flex">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img loading="eager" src={coin.icon} alt={coin.nombre} />
                <div className="flex items-baseline gap-2">
                  <h5 className="font-bold text-[#EEEEEC] text-xl">
                    {coin.ticker}
                  </h5>
                  <p className="font-semibold text-[13px] m-0 text-[#B5B3AD]">
                    {coin.nombre}
                  </p>
                </div>
              </div>

              <div className="relative flex w-fit justify-center">
                <motion.button
                  aria-label="Tarjeta anterior"
                  className="z-40 mx-2 h-5 w-5 cursor-pointer"
                  onClick={handlePrevClick}
                  style={{ color: "#7A7A7A" }}
                  whileTap={{ scale: 0.9, color: "#EEEEEC" }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ ease: easeInOut, duration: 0.075 }}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  aria-label="Siguiente Tarjeta"
                  className="z-40 mx-2 h-5 w-5 cursor-pointer"
                  onClick={handleNextClick}
                  style={{ color: "#7A7A7A" }}
                  whileTap={{ scale: 0.9, color: "#EEEEEC" }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ ease: easeInOut, duration: 0.1 }}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>

            <div className="relative flex h-[9.5em] items-center justify-center">
              <AnimatePresence>
                {cards.map((card, index) => {
                  const distance =
                    (index - currentCard + cards.length) % cards.length;
                  const zIndex =
                    distance === 0
                      ? 3
                      : distance === 1
                      ? 2
                      : distance === 2
                      ? 1
                      : 0;
                  const bottom =
                    distance === -1
                      ? 0
                      : distance === 0
                      ? 10
                      : distance === 1
                      ? 30
                      : 50;

                  const scale =
                    distance === -1
                      ? 1
                      : distance === 0
                      ? 1
                      : distance === 1
                      ? 0.9
                      : 0.8;

                  return (
                    <motion.div
                      key={card.id}
                      className={`shadow-[0_-20px_10px_-16px_rgba(10,10,10,.4)] absolute flex flex-col h-fit w-full rounded-3xl border border-[#262626] bg-[#111110] p-6 text-black`}
                      style={{
                        zIndex,
                        scale,
                        bottom,
                      }}
                      initial={{ scale, bottom, zIndex, opacity: 1 }}
                      animate={{
                        scale,
                        bottom,
                        zIndex,
                        opacity: 1,
                      }}
                      exit={{
                        scale,
                        bottom,
                        zIndex,
                        opacity: 0,
                        x: 700,
                      }}
                      transition={{
                        duration: 0.9,
                        type: "spring",
                        ease: easeInOut,
                        bounce: 0.325,
                      }}
                      layout
                    >
                      <p className="leading-6 text-[#7d7d7d] font-medium m-0 text-lg">
                        {card.tipo}
                      </p>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full">
                            <img
                              loading="eager"
                              src={card.svg}
                              alt={card.title}
                              className="h-7 w-7"
                            />
                          </span>
                          <h4 className="text-[#EEEEEC] leading-[1.6] m-0 text-xl font-semibold">
                            {card.title}
                          </h4>
                        </div>

                        <div className="flex flex-col items-end">
                          <p className="leading-3 text-[#7d7d7d] text-xs font-medium">
                            {coin.ticker} 1,00
                          </p>
                          <p className="text-[#CFD1DA] font-semibold">
                            $60.842,50
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Stack;
