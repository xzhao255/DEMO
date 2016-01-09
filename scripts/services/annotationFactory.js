/**
 * Created by xzhao on 12/27/15.
 */
angular.module("annotation").factory("annotation", annotation);

function annotation() {
    var allData = [
        {
            x: 100,
            y: 'med',
            formatter: 'medF'
        },
        {
            id: 2,
            name: 'allergy',
            formatter: 'allergyF'
        }
    ];

    return {
        getAllData: getAllData,
        getFormatterById: getFormatterById
    };

    function getAllData(){
        return allData;
    }

    function getFormatterById(id)
    {
        for(var i = 0; i < allData.length; i++){
            if(allData[i].id === id){
                return allData[i].formatter;
            }
        }
        return null;
    }
}