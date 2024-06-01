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
        className="mx-auto cursor-pointer hover:bg-[#0f0f0e] transition-all flex !items-center justify-between gap-4 text-[#777777] bg-[#111110] border-[1px] border-[#1D1D1C] font-medium w-2/3 lg:w-1/3 px-4 pl-5 py-3 rounded-2xl"
      >
        <span className="flex items-center gap-3">
          <svg width="16" height="16" fill="none">
            <path
              clipRule="evenodd"
              d="M1 6.76551c.00003-2.7504 1.94296-5.11774 4.64053-5.65421C8.3381.57483 11.039 2.01866 12.0913 4.55977c1.0524 2.54111.1631 5.47173-2.12392 6.99953s-5.33481 1.2273-7.27938-.7178C1.60716 9.76039.999984 8.29425 1 6.76551Z"
              stroke="#777"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.5288 12.5295 2.471 2.471"
              stroke="#777"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[1rem]">Buscá por nombre o ticker..</p>
        </span>
        <span className="lg:block md:hidden font-mono border border-[#161616] px-3 text-[.875rem] bg-[#0D0D0D] text-[#595959] rounded-lg">
          Cmd + K
        </span>
      </nav>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscá por nombre o ticker.." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados</CommandEmpty>
          <CommandGroup heading="Monedas">
            <CommandItem>
              <img src="/coins/btc.svg" loading="eager" alt="Bitcoin" />
              <span className="flex items-baseline gap-2 font-semibold text-[13px] m-0 text-[#B5B3AD]">
                <p className="font-bold text-[#EEEEEC] text-xl">BTC</p> Bitcoin
              </span>
            </CommandItem>
            <CommandItem>
              <img src="/coins/usdc.svg" loading="eager" alt="USDC" />
              <span className="flex items-baseline gap-2 font-semibold text-[13px] m-0 text-[#B5B3AD]">
                <p className="font-bold text-[#EEEEEC] text-xl">USDC</p> Usdc
              </span>
            </CommandItem>
            <CommandItem>
              <img src="/coins/bnb.svg" loading="eager" alt="BNB" />
              <span className="flex items-baseline gap-2 font-semibold text-[13px] m-0 text-[#B5B3AD]">
                <p className="font-bold text-[#EEEEEC] text-xl">BNB</p> Binance
                Coin
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
