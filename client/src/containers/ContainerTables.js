import React, { Component } from 'react'
import TableDepartments from './../components/TableDepartments'
import TableStates from './../components/TableStates'
import TableBorough from './../components/TableBorough'

const responseTxt = [
    "01 Lima /  /" ,
    "01 Lima / 50 Lima /",
    "01 Lima / 51 barranca /",
    "01 Lima / 50 Lima / 202 La Molina",
    "01 Lima / 50 Lima / 203 sna isidro",
    "02 Arequipa / / ",
    "02 Arequipa / 63 arequpa /" ,
    "02 Arequipa / 64 caylloma/",
    "02 Arequipa / 63 arequipa / 267 cercado"
];

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arrayDeparment: [],
            arrayState: [],
            arrayBorough: []
        };
        
    }
    
    getDeparment() {
        let departament = responseTxt.map(function (parsed) {
            return parsed.split('/')[0]
        });
        let filterList = departament.filter(function (elem, index, self) {
            return index === self.indexOf(elem)
        });
        let arrayDeparment = filterList.map(dpto =>
            dpto.trim().split(' ')
        );
        this.setState({ arrayDeparment });
    }

    getState() {
        let sts = [];
        let states = responseTxt.map((parsed)=> {
            let splitList = parsed.split('/');
            return [splitList[0], splitList[1]]
        });
        let removeEmptys = states.sort(((a, b) => a - b)).filter((elem)=> {
            return elem[1].trim() !== ''
        });
        removeEmptys.sort().map((value, index)=> {
            return (!index || value[1] !== removeEmptys[index - 1][1]) && sts.push(value)
        })
        let arrayState = sts.map(item =>
            [item[0].trim().split(' '), item[1].trim().split(' '),]
        )
        this.setState({ arrayState });
    }

    getBorough() {
        let borough = responseTxt.map((parsed)=> {
            let listaSeparada = parsed.split('/');
            return [listaSeparada[0], listaSeparada[2]]
        });
        let removeEmptys = borough.sort((a, b) => a - b).filter((elem)=> {
            return elem[1].trim() !== ''
        });
        let arrayBorough = removeEmptys.map(brg =>
            [brg[0].trim().split(' '), brg[1].trim().split(' '),]
        )
        this.setState({ arrayBorough });
    }

    componentDidMount(){
        this.getDeparment();
        this.getState();
        this.getBorough();
    }
    
    render() {
        const { arrayDeparment, arrayState , arrayBorough } = this.state
        return (
            <div>
                {arrayDeparment.length > 0&&<TableDepartments data={arrayDeparment} />}
                {arrayState.length > 0&&<TableStates data={arrayState}/>}
                {arrayBorough.length > 0&&<TableBorough data={arrayBorough}/>}
            </div>
        )
    }
}

export default Tables
