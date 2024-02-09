package com.test.example;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userdata")
public class UserData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="email")
	private String email;
	
	@Column(name="address")
	private String address;
	
	@Column(name="phonenumber")
	private Long phonenumber;
	
	@Column(name="balance")
	private Integer balance;
	
	@Column(name="depositdate")
	private String depositdate;
	
	@Column(name="withdrawamount")
	private Integer withdrawamount;
	
	@Column(name="withdrawdate")
	private String withdrawdate;
	
	@Column(name="recipientname")
	private String recipientname;
	
	@Column(name="transferamount")
	private Integer transferamount;
	
	@Column(name="transferdate")
	private String transferdate;
	
	@Column(name="savingbalance")
	private Integer savingbalance;
	
	@Column(name="accountstatus")
	private Integer accountstatus;
	
	
	@Column(name="chequerequest")
	private String chequerequest;
	
	
	@Column(name="chequerequeststatus")
	private String chequerequeststatus;
	
	@Column(name="loanrequest")
	private String loanrequest;
	
	@Column(name="loanamount")
	private Long loanamount;
	
	@Column(name="loanstatus")
	private String loanstatus;

	public UserData(Long id, String username, String password, String email, String address, Long phonenumber,
			Integer balance, String depositdate, Integer withdrawamount, String withdrawdate, String recipientname,
			Integer transferamount, String transferdate, Integer savingbalance, Integer accountstatus,
			String chequerequest, String chequerequeststatus, String loanrequest, Long loanamount, String loanstatus) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.address = address;
		this.phonenumber = phonenumber;
		this.balance = balance;
		this.depositdate = depositdate;
		this.withdrawamount = withdrawamount;
		this.withdrawdate = withdrawdate;
		this.recipientname = recipientname;
		this.transferamount = transferamount;
		this.transferdate = transferdate;
		this.savingbalance = savingbalance;
		this.accountstatus = accountstatus;
		this.chequerequest = chequerequest;
		this.chequerequeststatus = chequerequeststatus;
		this.loanrequest = loanrequest;
		this.loanamount = loanamount;
		this.loanstatus = loanstatus;
	}
	
	

	public UserData() {
	
	}



	@Override
	public String toString() {
		return "UserData [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", address=" + address + ", phonenumber=" + phonenumber + ", balance=" + balance + ", depositdate="
				+ depositdate + ", withdrawamount=" + withdrawamount + ", withdrawdate=" + withdrawdate
				+ ", recipientname=" + recipientname + ", transferamount=" + transferamount + ", transferdate="
				+ transferdate + ", savingbalance=" + savingbalance + ", accountstatus=" + accountstatus
				+ ", chequerequest=" + chequerequest + ", chequerequeststatus=" + chequerequeststatus + ", loanrequest="
				+ loanrequest + ", loanamount=" + loanamount + ", loanstatus=" + loanstatus + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(Long phonenumber) {
		this.phonenumber = phonenumber;
	}

	public Integer getBalance() {
		return balance;
	}

	public void setBalance(Integer balance) {
		this.balance = balance;
	}

	public String getDepositdate() {
		return depositdate;
	}

	public void setDepositdate(String depositdate) {
		this.depositdate = depositdate;
	}

	public Integer getWithdrawamount() {
		return withdrawamount;
	}

	public void setWithdrawamount(Integer withdrawamount) {
		this.withdrawamount = withdrawamount;
	}

	public String getWithdrawdate() {
		return withdrawdate;
	}

	public void setWithdrawdate(String withdrawdate) {
		this.withdrawdate = withdrawdate;
	}

	public String getRecipientname() {
		return recipientname;
	}

	public void setRecipientname(String recipientname) {
		this.recipientname = recipientname;
	}

	public Integer getTransferamount() {
		return transferamount;
	}

	public void setTransferamount(Integer transferamount) {
		this.transferamount = transferamount;
	}

	public String getTransferdate() {
		return transferdate;
	}

	public void setTransferdate(String transferdate) {
		this.transferdate = transferdate;
	}

	public Integer getSavingbalance() {
		return savingbalance;
	}

	public void setSavingbalance(Integer savingbalance) {
		this.savingbalance = savingbalance;
	}

	public Integer getAccountstatus() {
		return accountstatus;
	}

	public void setAccountstatus(Integer accountstatus) {
		this.accountstatus = accountstatus;
	}

	public String getChequerequest() {
		return chequerequest;
	}

	public void setChequerequest(String chequerequest) {
		this.chequerequest = chequerequest;
	}

	public String getChequerequeststatus() {
		return chequerequeststatus;
	}

	public void setChequerequeststatus(String chequerequeststatus) {
		this.chequerequeststatus = chequerequeststatus;
	}

	public String getLoanrequest() {
		return loanrequest;
	}

	public void setLoanrequest(String loanrequest) {
		this.loanrequest = loanrequest;
	}

	public Long getLoanamount() {
		return loanamount;
	}

	public void setLoanamount(Long loanamount) {
		this.loanamount = loanamount;
	}

	public String getLoanstatus() {
		return loanstatus;
	}

	public void setLoanstatus(String loanstatus) {
		this.loanstatus = loanstatus;
	}

	

}
