<div style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', maxWidth: '500px', margin: 'auto' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign:'center' }}>Create Social Media Post</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="post_text" style={{ display: 'block', marginBottom: '5px' }}>Post Text:</label>
                    <textarea id="post_text" name="post_text" value={formData.post_text} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="post_date" style={{ display: 'block', marginBottom: '5px' }}>Post Date:</label>
                    <input type="datetime-local" id="post_date" name="post_date" value={formData.post_date} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="creator_id" style={{ display: 'block', marginBottom: '5px' }}>Creator Id:</label>
                    <input type="number" id="creator_id" name="creator_id" value={formData.creator_id} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#38beba', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    {isSubmitting ? 'Submitting...' : 'Create Social Media Post'}
                </button>
                {submitError && <div style={{ color: 'red', marginTop: '10px' }}>{submitError}</div>}
                {submitSuccess && <div style={{ color: 'green', marginTop: '10px' }}>Social media post created successfully!</div>}
            </form>
        </div>