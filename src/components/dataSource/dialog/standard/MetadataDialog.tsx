import React, { Component } from 'react';
import { Modal, Button, Form} from 'antd';
import MetadataForm from '../../form/standard/MetadataForm';
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
class MetadataDialog extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {title, width, isEditable} = this.props;
        const WrappedForm = Form.create()(MetadataForm);
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={width - 100}
                bodyStyle={{padding: 12}}
                style={{top: 20}}
                onCancel={this.onClose}
                footer={isEditable ? [
                    <Button size={'small'} key="submit" type="primary" >保存</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ] : false}
            >
                <WrappedForm />
            </Modal>
        );
    }
}
export default MetadataDialog;
