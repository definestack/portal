<script setup lang="ts">
const dataTable = [
  {
    data: 'Warranty item details',
    description: 'Product name, purchase date, price, store, category, warranty length, notes',
    storedWhere: 'Local SQLite database on your device'
  },
  {
    data: 'Extended warranty details',
    description: 'Provider, duration, and cost for any extended warranty you add',
    storedWhere: 'Local SQLite database on your device'
  },
  {
    data: 'Invoice images',
    description: 'Photos of invoices/receipts, taken with your camera or selected from your photo gallery',
    storedWhere: 'Local app-private file storage on your device'
  },
  {
    data: 'Invoice documents',
    description: 'PDF documents you attach to an item',
    storedWhere: 'Local app-private file storage on your device'
  },
  {
    data: 'Reminder schedule',
    description: 'Dates for 30-day, 7-day, and expiry-day notifications, derived from the warranty data you enter',
    storedWhere: 'Local to your device, via the Android notification system'
  },
  {
    data: 'App preferences',
    description: 'Theme (light/dark), language, onboarding status, and similar settings',
    storedWhere: 'Local device storage (AsyncStorage)'
  },
  {
    data: 'Backup files',
    description: "A single export file (and attached documents) that you create using the App's local backup feature",
    storedWhere: 'Stored only where you choose to save it (your device, or a location you pick, such as your own cloud storage)'
  }
]

const permissions = [
  {
    name: 'Camera',
    reason: 'to let you take a photo of an invoice or receipt to attach to a warranty item.'
  },
  {
    name: 'Photos / Media Library',
    reason: 'to let you pick an existing photo of an invoice or receipt from your gallery.'
  },
  {
    name: 'Notifications',
    reason: 'to show local reminders before and on the day a warranty expires.'
  },
  {
    name: 'Storage / File access',
    reason:
      '(as required by Android version) to let you pick a PDF document to attach, and to let you save or share a backup export file.'
  }
]
</script>

<template>
  <main class="privacy-view">
    <!-- Header banner -->
    <section class="page-header dot-grid">
      <div class="container text-center">
        <span class="section-tag">Warranty Store</span>
        <h1 class="page-title">Privacy Policy</h1>
        <p class="page-desc centered">Last updated: October 26, 2026</p>
      </div>
    </section>

    <!-- Content -->
    <section class="privacy-content-section">
      <div class="container narrow">
        <p class="intro-paragraph">
          This Privacy Policy describes how Warranty Store ("the App", "we", "us") handles information when you use
          the application. Warranty Store is developed and published by DefineStack.
        </p>
        <p class="intro-paragraph">
          Warranty Store is designed to work <strong>fully offline</strong>. We do not operate any backend server
          for this app, and we do not collect, transmit, or sell your personal data to anyone.
        </p>

        <h2 class="policy-heading">1. Summary</h2>
        <ul class="policy-list">
          <li>No account or sign-up is required to use the App.</li>
          <li>
            All data you enter — warranty items, invoice images, documents, and settings — is stored
            <strong>locally on your device only</strong>.
          </li>
          <li>The App does not transmit your data to us, to the developer, or to any third party.</li>
          <li>The App does not contain advertising and does not use third-party analytics or tracking SDKs.</li>
          <li>
            Backup and restore are local, file-based operations that stay on your device (or wherever you choose to
            save/share the backup file, such as your own cloud storage app).
          </li>
        </ul>

        <h2 class="policy-heading">2. Information We Collect</h2>
        <p class="policy-paragraph">
          Warranty Store does <strong>not</strong> collect information on any server, because the App has no
          backend. The following information is created and stored <strong>only on your device</strong>, in the
          App's private local storage (SQLite database and private file storage):
        </p>

        <div class="table-wrapper">
          <table class="policy-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Description</th>
                <th>Where it's stored</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in dataTable" :key="row.data">
                <td>{{ row.data }}</td>
                <td>{{ row.description }}</td>
                <td>{{ row.storedWhere }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="policy-paragraph">
          We do not collect your name, email address, location, contacts, device identifiers, advertising IDs, or
          any analytics/usage data. We do not have user accounts, so we have no way to identify you.
        </p>

        <h2 class="policy-heading">3. Permissions the App Requests and Why</h2>
        <p class="policy-paragraph">
          Android will ask you to grant the following permissions. The App only uses them for the stated purpose,
          and never to transmit data off your device:
        </p>
        <ul class="policy-list">
          <li v-for="permission in permissions" :key="permission.name">
            <strong>{{ permission.name }}</strong> — {{ permission.reason }}
          </li>
        </ul>
        <p class="policy-paragraph">
          You can decline or revoke any of these permissions in your device's Settings; declining a permission only
          disables the related feature (e.g., declining Camera means you can still add an invoice from your gallery
          or skip attaching one).
        </p>

        <h2 class="policy-heading">4. How Your Information Is Used</h2>
        <p class="policy-paragraph">
          Information you enter is used solely to provide the App's core functionality on your device:
        </p>
        <ul class="policy-list">
          <li>Displaying your list of warranties and their status (active, expiring soon, expired).</li>
          <li>Calculating warranty expiry dates.</li>
          <li>Scheduling and showing local expiry reminder notifications.</li>
          <li>Displaying attached invoice images and documents.</li>
          <li>
            Creating a backup export file when you request one, and restoring your data when you import a backup
            file you select.
          </li>
        </ul>
        <p class="policy-paragraph">
          We do not use your information for advertising, profiling, or any purpose unrelated to the above.
        </p>

        <h2 class="policy-heading">5. Data Sharing and Third Parties</h2>
        <p class="policy-paragraph">
          We do not share, sell, rent, or trade your data with any third party, because we never receive it in the
          first place — it stays on your device.
        </p>
        <p class="policy-paragraph">
          The App does not integrate any third-party analytics, advertising, or crash-reporting SDKs that collect
          personal data.
        </p>
        <p class="policy-paragraph">The only way your data leaves your device is if <strong>you</strong> choose to:</p>
        <ul class="policy-list">
          <li>
            Share a backup export file using Android's built-in share functionality (e.g., to save it to your own
            cloud storage, email it to yourself, or move it via a file manager), or
          </li>
          <li>
            Use your device's camera/gallery apps, which are provided by Android/your device manufacturer and
            governed by their own privacy policies.
          </li>
        </ul>
        <p class="policy-paragraph">
          A future version of the App may offer an optional Google Drive backup feature. If and when this feature is
          introduced, this Privacy Policy will be updated beforehand to describe what data is involved, and the
          feature will be opt-in.
        </p>

        <h2 class="policy-heading">6. Data Storage and Security</h2>
        <ul class="policy-list">
          <li>
            All warranty records, invoice images, and documents are stored in the App's private storage area on your
            device, which is sandboxed by Android and not accessible to other apps.
          </li>
          <li>
            Backup export files are stored only at the location you choose when exporting (e.g., your device's
            downloads folder or a shared/cloud location you pick).
          </li>
          <li>
            Because there is no server-side storage, there is no remote database for us to secure or that could be
            breached by us. The security of your data depends on your device's own security (e.g., screen lock,
            device encryption) and on how you handle any backup files you create.
          </li>
        </ul>

        <h2 class="policy-heading">7. Data Retention and Deletion</h2>
        <ul class="policy-list">
          <li>Your data remains on your device for as long as the App is installed, or until you delete individual items within the App.</li>
          <li>Uninstalling the App removes the App's local database and private file storage from your device, in line with standard Android app uninstall behavior.</li>
          <li>Backup files you have exported and saved elsewhere (e.g., to cloud storage) are not affected by uninstalling the App and must be deleted separately by you, if desired.</li>
          <li>Since we do not collect or store your data on any server, there is no remote copy for us to delete; there is nothing for you to request from us in this respect.</li>
        </ul>

        <h2 class="policy-heading">8. Children's Privacy</h2>
        <p class="policy-paragraph">
          Warranty Store is a general-purpose productivity utility and is not directed at children. We do not
          knowingly collect personal information from anyone, including children, because the App does not collect
          personal information on any server.
        </p>

        <h2 class="policy-heading">9. Your Choices and Controls</h2>
        <ul class="policy-list">
          <li>You can view, edit, or delete any warranty item, invoice image, or document at any time within the App.</li>
          <li>You can disable notifications at any time via Android's notification settings for the App.</li>
          <li>You can revoke Camera, Photos, or Storage permissions at any time via Android's app permission settings.</li>
          <li>You can export a full backup of your data at any time, and you can delete your data by deleting items within the App or by uninstalling the App.</li>
        </ul>

        <h2 class="policy-heading">10. Changes to This Policy</h2>
        <p class="policy-paragraph">
          We may update this Privacy Policy from time to time, for example if we add new features that change how
          data is handled (such as an optional cloud backup feature). We will update the "Last updated" date above
          when changes are made. Continued use of the App after an update constitutes acceptance of the revised
          policy.
        </p>

        <h2 class="policy-heading">11. Contact Us</h2>
        <p class="policy-paragraph">
          If you have questions about this Privacy Policy or the App's data practices, contact us at:
        </p>
        <p class="policy-paragraph">
          <strong>Email:</strong> <a href="mailto:definestack@gmail.com" class="policy-link">definestack@gmail.com</a>
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.privacy-view {
  background-color: var(--color-white);
  padding-bottom: var(--space-4xl);
}

.page-header {
  padding: var(--space-4xl) 0;
  background-color: var(--color-light);
  border-bottom: 1px solid var(--color-border);
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--space-md);
  letter-spacing: -0.02em;
}

.page-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
}

.privacy-content-section {
  padding: var(--space-4xl) 0;
}

.narrow {
  max-width: 820px;
  margin: 0 auto;
  text-align: left;
}

.intro-paragraph {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.policy-heading {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-text-heading);
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-md);
}

.policy-paragraph {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-md);
}

.policy-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  padding-left: var(--space-xl);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.policy-list li {
  list-style: disc;
}

.table-wrapper {
  overflow-x: auto;
  margin-bottom: var(--space-lg);
}

.policy-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.policy-table th,
.policy-table td {
  border: 1px solid var(--color-border);
  padding: var(--space-sm) var(--space-md);
  text-align: left;
  vertical-align: top;
}

.policy-table th {
  background-color: var(--color-light);
  color: var(--color-text-heading);
  font-weight: 700;
}

.policy-table td {
  color: var(--color-text-muted);
}

.policy-link {
  color: var(--color-primary);
}

.policy-link:hover {
  color: var(--color-primary-hover);
}
</style>
