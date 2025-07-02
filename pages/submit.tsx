import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export default function SubmitPage() {
  const { t } = useTranslation('common')

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h2 className="text-xl font-semibold mb-5">{t('submit_complaint')}</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name (Optional)</label>
          <input type="text" className="w-full p-2 bg-gray-800 rounded" />
        </div>
        <div>
          <label className="block mb-1">Mobile (for status updates)</label>
          <input type="tel" className="w-full p-2 bg-gray-800 rounded" />
        </div>
        <div>
          <label className="block mb-1">Office / Official Involved *</label>
          <input type="text" required className="w-full p-2 bg-gray-800 rounded" />
        </div>
        <div>
          <label className="block mb-1">Department *</label>
          <select required className="w-full p-2 bg-gray-800 rounded">
            <option value="">Select Department</option>
            <option value="revenue">Revenue</option>
            <option value="police">Police</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">District *</label>
          <select required className="w-full p-2 bg-gray-800 rounded">
            <option value="">Select District</option>
            <option value="kanpur">Kanpur</option>
            <option value="lucknow">Lucknow</option>
            <option value="varanasi">Varanasi</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Date of Incident</label>
          <input type="date" className="w-full p-2 bg-gray-800 rounded" />
        </div>
        <div>
          <label className="block mb-1">Description *</label>
          <textarea rows={5} required className="w-full p-2 bg-gray-800 rounded"></textarea>
        </div>
        <div>
          <label className="block mb-1">Evidence (PDF/Image/Video)</label>
          <input type="file" className="w-full p-2 bg-gray-800 rounded" />
        </div>
        <div>
          <label className="block mb-1">Category *</label>
          <select required className="w-full p-2 bg-gray-800 rounded">
            <option value="">Select Category</option>
            <option value="bribery">Bribery</option>
            <option value="land-scam">Land Scam</option>
            <option value="fund-misuse">Fund Misuse</option>
            <option value="delay">Delay in Service</option>
            <option value="misconduct">Misconduct</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="public" defaultChecked className="rounded" />
          <label htmlFor="public">{t('make_public')}</label>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-semibold">
            {t('submit')}
          </button>
        </div>
      </form>
    </div>
  )
}