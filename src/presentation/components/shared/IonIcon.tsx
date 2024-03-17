import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    name:string,
    size?:number,
    color?:string,
}

export const IoICon = ({name,size=25,color='black'}:Props) => {

    return (
        <Icon name={name} size={size} color={color}/>
    )
}

