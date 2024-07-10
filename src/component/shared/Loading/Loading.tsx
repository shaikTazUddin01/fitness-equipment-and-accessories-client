import logo from '../../../assets/images/logo.webp'

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
        <img src={logo} alt="" className="welcomeLogo " />
      </div>
    );
};

export default Loading;