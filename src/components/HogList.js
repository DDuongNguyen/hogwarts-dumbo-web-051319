import React from 'react';
import Hogs from './Hogs';

export default class HogList extends React.Component{

  createHogs= () => {
    if (this.props.sortedTerm === 'weight') {
      const longJoke = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      this.props.data.sort((a, b) => a[longJoke] - b[longJoke])
    } else if (this.props.sortedTerm === 'name') {
      this.props.data.sort(
        function(a, b){
          var nameA=a.name.toLowerCase(),
          nameB=b.name.toLowerCase()
          if (nameA < nameB) return -1
          if (nameA > nameB) return 1
          return 0
        }
      )
    }
    return this.props.data.map(hog =>
      {
        if(this.props.filterTerm=== 'all'){
          return <Hogs key={hog.name} hogData={hog}/>
        }
        else if (this.props.filterTerm==='greased'&& hog.greased===true) {
          return <Hogs key={hog.name} hogData={hog}/>
        }
        else if (this.props.filterTerm==='non-greased'&& hog.greased===false) {
          return <Hogs key={hog.name} hogData={hog}/>
        }
      })
  }


    // createHogs= () => {
    //   let sortedListByWeight = [...this.props.data].sort((a, b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    //
    //   let sortedListByName = [...this.props.data].sort(
    //     function(a, b){
    //       var nameA=a.name.toLowerCase(),
    //           nameB=b.name.toLowerCase()
    //       if (nameA < nameB)
    //           return -1
    //       if (nameA > nameB)
    //           return 1
    //       return 0
    //     }
    //   )
    //
    //   if(this.props.sortedTerm==='weight'){
    //     console.log('sorted by weight');
    //     console.log(sortedListByWeight);
    //
    //     // debugger
    //     return sortedListByWeight.map(hog =>
    //       {
    //         if(this.props.filterTerm=== 'all'){
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //         else if (this.props.filterTerm==='greased'&& hog.greased===true) {
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //
    //         else if (this.props.filterTerm==='non-greased'&& hog.greased===false) {
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //       })
    //
    //   }
    //
    //   if(this.props.sortedTerm==='name'){
    //     console.log('sorted by name');
    //     console.log(sortedListByName);
    //     // debugger
    //     return sortedListByName.map(hog =>
    //       {
    //         if(this.props.filterTerm=== 'all'){
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //         else if (this.props.filterTerm==='greased'&& hog.greased===true) {
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //
    //         else if (this.props.filterTerm==='non-greased'&& hog.greased===false) {
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //       })
    //   }
    // else{
    //     return this.props.data.map(hog =>
    //       {
    //         if(this.props.filterTerm=== 'all'){
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //         else if (this.props.filterTerm==='greased'&& hog.greased===true) {
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //
    //         else if (this.props.filterTerm==='non-greased'&& hog.greased===false) {
    //           return <Hogs key={hog.name} hogData={hog}/>
    //         }
    //       })
    //   }
    // }
    //



  render(){
    return(
      <div>
      {this.createHogs()}
      </div>
    )

  }
}


















// {name: "Mudblood",
// specialty: "Mediocre magic",
// greased: false,
// weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: 2,
// highest medal achieved: "bronze"}
