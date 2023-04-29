import Footer from "./Footer";
import Header from "./Header";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {

  return (
    <main className="w-full antialiased text-right">
      <Header/>

       <div className="w-full overflow-x-hidden">
        {children}
       </div>

       <Footer/>

     </main>
  );
};

export { ContentContainer };