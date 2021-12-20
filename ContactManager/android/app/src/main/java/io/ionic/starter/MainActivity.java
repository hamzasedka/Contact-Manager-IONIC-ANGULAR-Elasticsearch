package io.ionic.starter;

//importe the Contact Package
import ch.byrds.capacitor.contacts.Contacts;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import android.os.Bundle;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(Contacts.class);
    }});
  }
}
