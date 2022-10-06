import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flext: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    h1:{ 
        fontSize:32
    },
    h2:{ 
        fontSize:24
    },
    button:{
        borderRadius:12,
        backgroundColor:'gray',
        outline:'none',
        borderColor:'none',
        padding: 10,
        paddingLeft: 7,
        paddingRight: 7,
        marginTop:20,
        width: '95%',
        height: 'auto',
        alignItems:'center',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonText:{
        color:'white',
    },
    pt3:{
        marginTop:12
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      textInput:{
        justifyContent: 'center',
        backgroundColor:'#c0c0c0',
        height:'auto',
        borderRadius: 12,
        padding:8,
        marginBottom: 11,
        minWidth:'90%',
        maxWidth:'100%',
      },
      card:{
        backgroundColor:'#dfdfdf',
        minWidth:'95%',
        padding:12,
        borderRadius:12,
      },
      buttonDell:{
        borderRadius:12,
        backgroundColor: '#ed3446',
        outline:'none',
        borderColor:'none',
        padding: 10,
        paddingLeft: 7,
        paddingRight: 7,
        marginTop:20,
        width: '95%',
        height: 'auto',
        alignItems:'center',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})