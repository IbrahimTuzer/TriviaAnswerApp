import { Background } from '@react-navigation/elements'
import React from 'react'
import { 
    FlatList, 
    StyleSheet, 
    Text, 
    View } from 'react-native'

const HistoryFlatlist = (props) => {


  return (
    <View style={styles.container}>

      <FlatList
        alwaysBounceVertical={false}
        data={props.scoresData}
        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item})=>{

            const dateString = item.date

            const dateObject = new Date(dateString)

            const formattedDated = dateObject.toLocaleDateString()
            const formattedTime = dateObject.toLocaleTimeString()


            return(
                <View style={styles.scoresContainer}>

                    <Text style={styles.dateText}>Date: {formattedDated} {formattedTime}</Text>
                    <Text style={{
                        color: item.score > 0 ? "green" : "red",
                        fontWeight:"bold",
                        fontSize: 17
                        
                    }}>Score: {item.score}</Text>

                </View>
            )

        }}
      />

    </View>
  )
}

export default HistoryFlatlist

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        
    },
    scoresContainer:{
        width:'100%',
        borderBottomWidth:0.2,
        borderRadius:10,
        marginVertical:15,
        padding:10,
        paddingHorizontal:30,
        paddingVertical: 15,
        justifyContent:'space-around',
        flexDirection:'row',
        
        
    },
    dateText:{
        fontWeight:'bold'
    }
})