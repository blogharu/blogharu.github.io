
class PianoOctave extends React.Component{
//  numActive = 0;
  OnMouseDown(event){
      let audio = document.querySelector(`audio[data-note="${event.target.dataset.note}"]`);
      audio.currentTime = 0;
      audio.play();
//      numActive++;
  }
  OnMouseUp(event){
//    numActive--;
    let audio = document.querySelector(`audio[data-note="${event.target.dataset.note}"]`);
    audio.pause();
  }
  render(){
    let className = "PianoKey " + this.props.octave;
    if (this.props.octave === "0"){
      return (
        <div className={className} style={{marginLeft:"-120mm"}}>
          <div style={{position:"absolute", left:"120mm",top:"0"}} className="white-key A" data-note={"sound-A"+this.props.octave} onMouseDown={this.OnMouseDown} onMouseUp={this.OnMouseUp}/>

          <div style={{position:"absolute", left:"144mm"}} className="white-key B"  data-note={"sound-B"+this.props.octave} onMouseDown={this.OnMouseDown} onMouseUp={this.OnMouseUp}/>

          <div className="black-key A-sharp"  data-note={"sound-A-sharp"+this.props.octave} onMouseDown={this.OnMouseDown} onMouseUp={this.OnMouseUp}/>

        </div>
      );
    }
    else if (this.props.octave === "8"){
      return (
        <div className={className} style={{width:"24mm"}}>
          <div className="white-key C" data-note={"sound-C"+this.props.octave} onMouseDown={this.OnMouseDown} onMouseUp={this.OnMouseUp}/>
        </div>
      );
    }
    else{
      let notes = ["C","D","E","F","G","A","B"];
      let keys = []
      for (let note of notes){
        let key = note + this.props.octave.toString();
        keys.push(<div key={key} className={"white-key " + note} data-note={"sound-" + note + this.props.octave} onMouseDown={this.OnMouseDown} onMouseUp={this.OnMouseUp}/>);
      }
      notes = ["C-sharp","D-sharp","F-sharp","G-sharp","A-sharp"];
      for (let note of notes){
        let key = note + this.props.octave.toString();
        keys.push(<div key={key} className={"black-key " + note} data-note={"sound-" + note + this.props.octave} onMouseDown={this.OnMouseDown} onMouseUp={this.OnMouseUp}/>);
      }

      return (
        <div className={className}>
          {keys}
        </div>
      );
    }
  }
}

class Piano extends React.Component{
  render(){
    return (
      <div className="Piano">
        <PianoOctave octave="0" />
        <PianoOctave octave="1" />
        <PianoOctave octave="2" />
        <PianoOctave octave="3" />
        <PianoOctave octave="4" />
        <PianoOctave octave="5" />
        <PianoOctave octave="6" />
        <PianoOctave octave="7" />
        <PianoOctave octave="8" />
      </div>
    );
  }
}

class PianoSound extends React.Component{
  render(){
    var notes = ["C","C-sharp","D","D-sharp","E","F","F-sharp","G","G-sharp","A","A-sharp","B"];

    var audios = [];

    for (let note of notes){
      let start = 1, end = 8;
      if (note === "C"){
        end = 9;
      }
      else if (["A", "B", "A-sharp"].includes(note)){
        start = 0;
      }
      for (let i = start ; i < end ; i++){
        let key = note + i.toString();
        audios.push(<audio key={key} data-note={"sound-"+key} src={"/assets/ogg/PianoApp/"+key+".ogg"} type="audio/ogg" />);
      }
    }

    return (
      <div>
        {audios}
      </div>
    )
  }
}

class PianoApp extends React.Component{
  render(){
    return (
      <div className="PianoApp">
        <Piano />
        <PianoSound />
      </div>
    );
  }
}

const domContainer = document.querySelector('.App');
ReactDOM.render(<PianoApp />, domContainer);