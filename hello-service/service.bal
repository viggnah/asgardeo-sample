import ballerina/http;
import ballerina/io;

public type Entry record {|
    string name;
    int age;
|};

public type EntryResponse record {|
    boolean status;
|};

# A service representing a network-accessible API
# bound to port `9090`.
service / on new http:Listener(9090) {
    resource function post entry(@http:Payload Entry entry) returns EntryResponse {
        io:println("Hello," + entry.name.toString() + " glad that you're " + entry.age.toString());
        //Let's assume the entry is accepted all the time 
        return {status: true};
    }
}
