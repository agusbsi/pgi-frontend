import React, { useState } from 'react';
import { Button, Form, Input, Upload, message, Modal, Avatar, Col, Row, Card, Space } from 'antd';
import { UploadOutlined, SaveOutlined, EditOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [username, setUsername] = useState('john_doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('08123456789');
  const [address, setAddress] = useState('123 Main Street, City, Country');
  const [bio, setBio] = useState('A passionate developer.');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [visible, setVisible] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleBioChange = (e) => setBio(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

  const handlePhotoChange = ({ file }) => {
    if (file.status === 'done') {
      message.success(`${file.name} uploaded successfully`);
      setNewPhoto(file.originFileObj);
    } else if (file.status === 'error') {
      message.error(`${file.name} upload failed.`);
    }
  };

  const handleSaveChanges = () => {
    // Logic to save changes (username, photo, password, biodata)
    message.success('Profile updated successfully!');
    setVisible(false);  // Close modal after saving changes
  };

  const handleCancel = () => {
    setVisible(false);  // Close the modal without saving
  };

  return (
    <div style={{ padding: '40px' }}>
      <Row gutter={24}>
        {/* Profile Card */}
        <Col span={8}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Avatar size={100} src={newPhoto ? URL.createObjectURL(newPhoto) : null} />
              <Button 
                type="primary" 
                icon={<EditOutlined />} 
                onClick={() => setVisible(true)} 
                style={{ marginTop: 10 }}
              >
                Change Photo
              </Button>
            </div>
            <div style={{ marginTop: 20 }}>
              <h3>{username}</h3>
              <p>{email}</p>
            </div>
          </Card>
        </Col>

        {/* Biodata Form */}
        <Col span={16}>
          <Card title="Account Settings" bordered={false}>
            <Form layout="vertical">
              {/* Username */}
              <Form.Item label="Username" name="username">
                <Input 
                  value={username} 
                  onChange={handleUsernameChange} 
                  placeholder="Enter your username" 
                />
              </Form.Item>

              {/* Email */}
              <Form.Item label="Email" name="email">
                <Input 
                  value={email} 
                  onChange={handleEmailChange} 
                  placeholder="Enter your email" 
                />
              </Form.Item>

              {/* Phone */}
              <Form.Item label="Phone Number" name="phone">
                <Input 
                  value={phone} 
                  onChange={handlePhoneChange} 
                  placeholder="Enter your phone number" 
                />
              </Form.Item>

              {/* Address */}
              <Form.Item label="Address" name="address">
                <Input 
                  value={address} 
                  onChange={handleAddressChange} 
                  placeholder="Enter your address" 
                />
              </Form.Item>

              {/* Bio */}
              <Form.Item label="Bio" name="bio">
                <Input.TextArea 
                  value={bio} 
                  onChange={handleBioChange} 
                  placeholder="Tell us about yourself" 
                  rows={4} 
                />
              </Form.Item>

              {/* Password */}
              <Form.Item label="Password" name="password">
                <Input.Password 
                  value={password} 
                  onChange={handlePasswordChange} 
                  placeholder="Enter your current password" 
                  iconRender={visible => (visible ? <LockOutlined /> : <LockOutlined />)}
                />
              </Form.Item>

              {/* New Password */}
              <Form.Item label="New Password" name="newPassword">
                <Input.Password 
                  value={newPassword} 
                  onChange={handleNewPasswordChange} 
                  placeholder="Enter a new password" 
                  iconRender={visible => (visible ? <LockOutlined /> : <LockOutlined />)}
                />
              </Form.Item>

              {/* Save Changes */}
              <Form.Item>
                <Button 
                  type="primary" 
                  icon={<SaveOutlined />} 
                  onClick={handleSaveChanges}
                  style={{ width: '100%' }}
                >
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Modal for Changing Profile Picture */}
      <Modal
        title="Change Profile Picture"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSaveChanges}>
            Save
          </Button>,
        ]}
      >
        <Upload
          action="/upload"  // Replace with your backend API endpoint
          showUploadList={false}
          onChange={handlePhotoChange}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Modal>
    </div>
  );
};

export default AccountPage;
