public class SearchAccount {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountDetails(String accountName){
        accountName='%'+accountName+'%';
        List<Account> accounts=[SELECT id,name FROM account WHERE name like : accountName];
        return accounts;
    }
}