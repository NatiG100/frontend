const cardStyle = {
    marginTop: 'auto',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 0px 8px rgba(45,45,45,30%)',
    borderRadius: '0px',
    border: '0px'
};
const getStyle = (element) => {
    if(element === 'card'){
        return cardStyle;
    }
};
export default getStyle;