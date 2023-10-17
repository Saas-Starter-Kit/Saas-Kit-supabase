import { Box, Anchor, Bird, Carrot, Citrus, Factory } from 'lucide-react';

export default function LogoCloud() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="grid grid-cols-2 items-center justify-center">
            <Box className="justify-self-end" size={48} />
            <span className="text-xl ml-2 mt-2 font-semibold">Cube</span>
          </div>
          <div className="grid grid-cols-2">
            <Anchor className="justify-self-end" size={44} />
            <span className="text-xl ml-2 mt-2 font-extrabold">Anchor</span>
          </div>
          <div className="grid grid-cols-2">
            <Bird className="justify-self-end" size={44} />
            <span className="text-xl ml-2 mt-2 font-extrabold">Bird</span>
          </div>
          <div className="grid grid-cols-2">
            <Carrot className="justify-self-end" size={46} />
            <span className="text-xl ml-2 mt-2 font-medium">Carrot</span>
          </div>
          <div className="grid grid-cols-2">
            <Citrus className="justify-self-end" size={44} />
            <span className="text-xl ml-2 mt-2">Citrus</span>
          </div>
          <div className="grid grid-cols-2">
            <Factory className="justify-self-end" size={44} />
            <span className="text-xl ml-2 mt-2 font-bold">Factory</span>
          </div>
        </div>
      </div>
    </div>
  );
}
