import Header from "./Header";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {

  return (
    <main className="w-full antialiased text-right">
      <Header/>

       <div className="w-full p-5 overflow-x-hidden ">
        {children}
       </div>

     </main>
  );
};

export { ContentContainer };