import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState, useEffect } from "react";

const Search = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <nav
        onClick={() => setOpen(true)}
        className=" mx-auto cursor-pointer hover:bg-[#0f0f0e] transition-all flex !items-center justify-between gap-4 text-[#8C8C8C] bg-[#111110] border border-[#1D1D1C] font-medium w-2/3 text-sm lg:w-1/3 px-4 pl-5 py-3 rounded-2xl"
      >
        <span className="flex items-center gap-3">
          <svg width="16" height="16" fill="none">
            <path
              clipRule="evenodd"
              d="M1 6.76551c.00003-2.7504 1.94296-5.11774 4.64053-5.65421C8.3381.57483 11.039 2.01866 12.0913 4.55977c1.0524 2.54111.1631 5.47173-2.12392 6.99953s-5.33481 1.2273-7.27938-.7178C1.60716 9.76039.999984 8.29425 1 6.76551Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.5288 12.5295 2.471 2.471"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-md opacity-90">Buscá por nombre..</p>
        </span>
        <span className="lg:block hidden font-mono border border-[#161616] px-3 text-[.875rem] bg-[#0D0D0D] text-[#7D7D7D] rounded-lg">
          Cmd + K
        </span>
      </nav>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscá por nombre.." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados</CommandEmpty>
          <CommandGroup heading="Monedas">
            <CommandItem>
              <a href="/btc" className="flex gap-2 w-full px-2 py-3">
                <img
                  width={28}
                  height={28}
                  src="/coins/btc.svg"
                  alt="Bitcoin"
                />
                <span className="flex items-baseline gap-2 font-semibold text-[13px] m-0 text-[#B5B3AD]">
                  <p className="font-bold text-[#EEEEEC] text-lg">BTC</p>{" "}
                  Bitcoin
                </span>
              </a>
            </CommandItem>
            <CommandItem>
              <a href="/usdc" className="flex gap-2 w-full px-2 py-3">
                <img width={28} height={28} src="/coins/usdc.svg" alt="USDC" />
                <span className="flex items-baseline gap-2 font-semibold text-[13px] m-0 text-[#B5B3AD]">
                  <p className="font-bold text-[#EEEEEC] text-lg">USDC</p> Usdc
                </span>
              </a>
            </CommandItem>
            <CommandItem>
              <a href="/bnb" className="flex gap-2 w-full px-2 py-3">
                <img width={28} height={28} src="/coins/bnb.svg" alt="BNB" />
                <span className="flex items-baseline gap-2 font-semibold text-[13px] m-0 text-[#B5B3AD]">
                  <p className="font-bold text-[#EEEEEC] text-lg">BNB</p>{" "}
                  Binance Coin
                </span>
              </a>{" "}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
