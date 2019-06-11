import java.io.*;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

public class PackageStation {
 
public static void main(String[] args) throws IOException {
try {
int n,palletid=0;
BufferedReader br = new BufferedReader(
new InputStreamReader(System.in));
 
System.out.println("Hi, welcome to sending station ");
System.out.println("Press 1 to Activate bot 1");
System.out.println("Press 2 to Activate bot 2");
n = Integer.parseInt(br.readLine());
  
 if(n==1)
 {
	 System.out.println("Hi in bot 1");
	 callapi(palletid);
	 callbotid(11);
 }
 else if(n==2) {
	 System.out.println("Hi in bot 2");
	 callapi(palletid);
	 callbotid(12);
 }
 else {
	 System.out.println("Please enter a valid input");
 }
}
catch(Exception e) {
	e.printStackTrace();
}
}
public static void callbotid(int i) {
	System.out.println("calling bot with id "+ i);
	
}
public static void callapi(int id) throws UnsupportedEncodingException {
	try { 
	CloseableHttpClient client = HttpClients.createDefault();
	    HttpPost httpPost = new HttpPost("");
	 
	    String json = "";
	    StringEntity entity = new StringEntity(json);
	    httpPost.setEntity(entity);
	    httpPost.setHeader("Accept", "application/json");
	    httpPost.setHeader("Content-type", "application/json");
	 
	    CloseableHttpResponse response = client.execute(httpPost);
	    client.close();
}
catch(Exception e) {
	e.printStackTrace();
}
}

} 
