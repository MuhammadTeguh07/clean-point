export const handleScroll = (id: string, setIsMenuActive?: any) => {
    if(id === "beranda") {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Efek scroll yang halus
        });
    }else{
        setIsMenuActive(id)
    }
};