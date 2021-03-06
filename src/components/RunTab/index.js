import React from "react";
import { Grid, Header, Label, Segment } from "semantic-ui-react";
import RunTabDoc from "../../components/RunTabDoc";
import RunTabOptionCard from "../../components/RunTabOptionCard";
import OptionModal from "../RunTabOptionCard";

const RunTab = () => (
  <div>
    <Header as="h2"> Run Tab UI </Header>
    <RunTabDoc />

    <Header as="h4"> Options </Header>
    <Grid columns={2}>
      <Grid.Column>
        <Segment raised>
          <Label as="a" color="red" ribbon>
            -d, --deps
            <OptionModal
              name="Stage File Dependent"
              desc="Specify a file or a directory the stage depends on. Multiple dependencies can be specified like this: -d data.csv -d process.py. Usually, each dependency is a file or a directory with data, or a code file, or a configuration file. DVC also supports certain external dependencies"
            />
          </Label>
          <div />

          <Label as="a" color="blue" ribbon>
            -o, --outs
            <OptionModal
              name="Save Output As File"
              desc="Specify a file or a directory that are results of running the command. Multiple outputs can be specified like this: -o model.pkl -o output.log. DVC is building a computation graph and this list of outputs (along with dependencies described above) is a way to connect different stages with each other. DVC takes all output files and directories under its control and will put them into the cache (this is similar to what's happening when you run dvc add)."
            />
          </Label>
          <div />
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>
          <Label as="a" color="orange" ribbon="right">
            -f, --file
            <OptionModal
              name="Specify File Name"
              desc="Specify stage file name. By default the DVC-file name generated is <file>.dvc, where <file> is file name of the first output (-o, -O, -m, or -M option). The stage file is placed in the same directory where dvc run is run by default, but -f can be used to change this location, by including a path in the provided value (e.g. -f stages/stage.dvc)."
            />
          </Label>
          <div />

          <Label as="a" color="teal" ribbon="right">
            -m, --metrics
            <OptionModal
              name="Add Output File"
              desc="Another kind of output files. It is usually a small human readable file (JSON, CSV, text, whatnot) with some numbers or other information that describes a model or other outputs. Check dvc metrics to learn more about tracking metrics and comparing them across different model or experiment versions."
            />
          </Label>
          <div />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default RunTab;
