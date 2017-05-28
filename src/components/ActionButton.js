import React from 'react';
import {Button, Modal, Input, Select} from 'antd';
import uuid from 'uuid-v4';

const InputGroup = Input.Group;
const Option = Select.Option;

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      quest: this.generateQuest(props.type),
    };
  }

  componentWillReceiveProps({type}) {
    if (type !== this.props.type) {
      this.setState({
        quest: Object.assign({}, this.state.quest, {
          type,
        }),
      });
    }
  }

  generateQuest(type) {
    return {
      key: uuid(),
      query: '',
      type,
      platform: '',
      readPosts: [],
    };
  }

  render() {
    const {type, onQuestCreate} = this.props;
    const {visible, quest} = this.state;
    const {platform, query} = quest;
    const wording = `我要${type === 'buy' ? '買' : '賣'}遊戲`;
    return (
      <div>
        <Button
          type="primary"
          size="small"
          style={{marginTop: 7, marginRight: 10}}
          onClick={() => this.setState({visible: true})}>
          {wording}
        </Button>
        <Modal
          title="新增任務"
          visible={visible}
          wrapClassName="vertical-center-modal"
          onOk={() => {
            onQuestCreate(this.state.quest);
            this.setState({visible: false, quest: this.generateQuest(type)});
          }}
          onCancel={() => this.setState({visible: false, quest: this.generateQuest(type)})}
          okText="新增"
          cancelText="取消">
          <InputGroup compact>
            <Select
              showSearch
              style={{width: 120}}
              placeholder="選擇平台"
              value={platform}
              onSelect={value =>
                this.setState({
                  quest: Object.assign({}, quest, {
                    platform: value,
                  }),
                })}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              <Option value="NS">NS</Option>
              <Option value="PS4">PS4</Option>
              <Option value="XONE">XONE</Option>
              <Option value="WiiU">WiiU</Option>
              <Option value="PSV">PSV</Option>
              <Option value="3DS">3DS</Option>
              <Option value="PC">PC</Option>
              <Option value="">不拘</Option>
            </Select>
            <Input
              style={{width: '50%'}}
              placeholder="目標字串"
              value={query}
              onChange={e =>
                this.setState({
                  quest: Object.assign({}, quest, {
                    query: e.target.value,
                  }),
                })}
            />
          </InputGroup>
        </Modal>
      </div>
    );
  }
}

export default ActionButton;
